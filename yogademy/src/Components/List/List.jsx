import React, { Component } from 'react';

//Actions
import { getData } from '../../utils/api';

//Components
import Item from './Item/Item';
import Button from 'react-bootstrap/Button';
import CreateItem from './CreateItem/CreateItem';
import UpdateItem from './UpdateItem/UpdateItem';


class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      lastCicked: null,
      creating:false,
    }
    this.updateList = this.updateList.bind(this);
    this.changeLastClicked = this.changeLastClicked.bind(this);
    this.createItem = this.createItem.bind(this);
    this.updateList = this.updateList.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    this.updateList();
  }

  updateList(){
    getData('items').then((items) => this.setState({items}));
  }

  changeLastClicked(id) {
    this.setState({lastCicked: id})
  }

  createItem(){
    this.setState({creating:true});
  }

  closeModal(){
    this.setState({creating:false});
    this.updateList();
  }
  renderItems(){
    return this.state.items.map((item, i) => (
      <Item
      key = {`item-${i}`}
      lastCicked = {this.state.lastCicked}
      changeLastClicked = {this.changeLastClicked}
      updateList={this.updateList}
      {...item}
      />
    ));
  }

render(){
  return(
    <>
      <CreateItem show={this.state.creating} hide={this.closeModal}/>
        <Button variant="primary" onClick={this.createItem}>add new Item</Button>
        <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Value</th>
            <th>Clicked</th>
          </tr>
        </thead>
      <tbody>
        {this.renderItems()}
      </tbody>
      </table>
    </>
  );
}
}

export default List;
