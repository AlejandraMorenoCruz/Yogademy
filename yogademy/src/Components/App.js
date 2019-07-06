import React from 'react';
//npm i -s react-router.dom
import { BrowserRouter, Link, Switch } from "react-router-dom";

import Route from 'react-router-dom/Route'

//Components
import Background from './Background/Background';
import Header from './Content/Header/Header';
import Init from '../Init'

    import StartTeacher from './Content/AllTeacher/StartTeacher'
        import MainTeacher from './Content/AllTeacher/MainTeacher/MainTeacher';
        import InitTeacher from './Content/AllTeacher/InitTeacher/InitTeacher';
        import LoginTeacher from './Content/AllTeacher/LoginTeacher/LoginTeacher';
        import RegisterTeacher from './Content/AllTeacher/RegisterTeacher/RegisterTeacher';
        import Students from './Content/AllTeacher/Students/Students';
        import Lessons from './Content/AllTeacher/Lessons/Lessons';
        import Activity from './Content/AllTeacher/Activity/Activity';
        import ProfileTeacher from './Content/AllTeacher/ProfileTeacher/ProfileTeacher';


      import StartStudent from './Content/AllStudent/StartStudent'
        import MainStudent from './Content/AllStudent/MainStudent/MainStudent';
        import InitStudent from './Content/AllStudent/InitStudent/InitStudent';
        import LoginStudent from './Content/AllStudent/LoginStudent/LoginStudent';
        import RegisterStudent from './Content/AllStudent/RegisterStudent/RegisterStudent';
        import Teachers from './Content/AllStudent/Teachers/Teachers';
        import MyLessons from './Content/AllStudent/MyLessons/MyLessons';
        import ProfileStudent from './Content/AllStudent/ProfileStudent/ProfileStudent';


//CSS
import './App.css';

function App() {

  return (
    <BrowserRouter>
        <Route component={Background} />
          <Route component={Header}/>
          <Route exact path="/" component={Init}/>
          <Route exact path="/study" component={InitStudent} />
          <Route exact path="/study/Login" component={LoginStudent} />
          <Route exact path="/study/Register" component={RegisterStudent} />
          <Route path="/study/mainStudent" component={MainStudent} />
          <Route exact path="/study/mainStudent/teachers" component={Teachers} />
          <Route exact path="/study/mainStudent/mylessons" component={MyLessons} />
          <Route exact path="/study/mainStudent/profile" component={ProfileStudent} />

          <Route exact path="/teach" component={InitTeacher} />
          <Route exact path="/teach/Login" component={LoginTeacher} />
          <Route exact path="/teach/Register" component={RegisterTeacher} />
          <Route path="/teach/mainTeacher" component={MainTeacher} />
          <Route exact path="/teach/mainTeacher/students" component={Students} />
          <Route exact path="/teach/mainTeacher/lessons" component={Lessons} />
          <Route exact path="/teach/mainTeacher/activity" component={Activity} />
          <Route exact path="/teach/mainTeacher/profile" component={ProfileTeacher} />
    </BrowserRouter>
  );
}

export default App;
