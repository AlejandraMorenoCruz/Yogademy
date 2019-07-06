import React, { Component } from 'react';

//Actions
import { getData } from '../../../utils/api';

//Components
import Item from '../List/Item/Item.jsx';
import Button from 'react-bootstrap/Button';
import CreateItem from '../List/CreateItem/CreateItem.jsx';
import UpdateItem from '../List/UpdateItem/UpdateItem.jsx';


class ProfileStudents extends Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      
      creating:false,
    }
    this.updateList = this.updateList.bind(this);
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
            <th classname = "lista">Id</th>
            <th classname = "lista">Name</th>
            <th classname = "lista">Description</th>
            <th classname = "lista">Value</th>
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

export default ProfileStudents;
