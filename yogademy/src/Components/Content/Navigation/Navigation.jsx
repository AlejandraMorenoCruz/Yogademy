import React from 'react'
import Link from 'react-router-dom/Link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const divStyle = {
  backgroundColor: 'red',
  height: '1000px'
};

const Navigation = ( props) => (
  <div style={divStyle} > 
      {props.children}
  </div>


);

export default Navigation;
