import React from 'react';
//npm i -s react-router.dom
import { BrowserRouter, Link, Switch } from "react-router-dom";

import Route from 'react-router-dom/Route'

//Components
import Start from './Start/Start';
import Init from './Start/Init/Init';
import Login from './Start/Login/Login';
import Register from './Start/Register/Register';
import Navigation from './Content/Navigation/Navigation';
import Clases from './Content/Clases/Clases';

//CSS
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Switch>
      <Route component={Start}>
        <Route exact path="/" component = {Init}/>
        <Route exact path="/Login" component = {Login}/>
        <Route exact path="/Register" component = {Register}/>
      </Route>

      <Route component={Navigation}>
        <Route exact path="/Nav" component = {Navigator}/>
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
