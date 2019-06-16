import React from 'react';
//npm i -s react-router.dom
import { BrowserRouter, Link, Switch } from "react-router-dom";

import Route from 'react-router-dom/Route'

//Components
import Background from './Start/Background';
    import Start from './Start/Start';
        import Init from './Start/Init/Init';
        import Login from './Start/Login/Login';
        import Register from './Start/Register/Register';
    import MainTeacher from './Content/MainTeacher/MainTeacher';
        import Students from './Content/Students/Students';
        import Lessons from './Content/Lessons/Lessons';
        import Activity from './Content/Activity/Activity';
    import MainStudent from './Content/MainStudent/MainStudent';
        import Teachers from './Content/Teachers/Teachers';
        import MyLessons from './Content/MyLessons/MyLessons';
        import Profile from './Content/Profile/Profile';


//CSS
import './App.css';

function App() {

  return (
    <BrowserRouter>
        <Route component={Background} />
          <Route exact path="/" component={Init} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          
          <Route exact path="/teach/mainTeacher" component={MainTeacher} />
          <Route exact path="/teach/students" component={Students} />
          <Route exact path="/teach/lessons" component={Lessons} />
          <Route exact path="/teach/activity" component={Activity} />

          <Route exact path="/study/mainStudent" component={MainStudent} />
          <Route exact path="/study/teachers" component={Teachers} />
          <Route exact path="/study/mylessons" component={MyLessons} />
          <Route exact path="/study/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;
