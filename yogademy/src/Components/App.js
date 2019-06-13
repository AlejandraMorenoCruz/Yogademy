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

const LoginZone = () => (
  <Start>
    <Route exact path="/" component={Init} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Register" component={Register} />
  </Start>
)

const ContentZone = () => (
  <Navigation>
    <Route exact path="/clases" component={Clases} />
  </Navigation>
)

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/clases" component={ContentZone} />
        <Route path="/" component={LoginZone} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
