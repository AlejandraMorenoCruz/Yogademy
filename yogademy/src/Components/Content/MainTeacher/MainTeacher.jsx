import React from 'react'
import Link from 'react-router-dom/Link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const divStyle = {
  backgroundColor: 'green',
  height: '1000px'
};

const MainTeacher = ( props) => (
  <div style={divStyle} >
      {props.children}
  </div>


);

export default MainTeacher;
