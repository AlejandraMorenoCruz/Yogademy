import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';
import './Start.css';

const Start = ( props) => (
    <div className="bg">
      {props.children}
    </div>
);

export default Start;
