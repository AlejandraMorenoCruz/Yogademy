import React from 'react';

//components
import Logo from './Logo/Logo';
import UserArea from './UserArea/UserArea';

import './Header.css';

const Header = () =>(
  <div className = "header">
    <Logo />
    <h1>Yogademy</h1>
    <UserArea />
  </div>
);
//<UserArea loggedIn />

export default Header;
