import React from 'react';

//components
import Logo from './Logo/Logo';

import './Header.css';

const Header = () =>(

<>
  <div className = "barra" fixed="top">
    <Logo/>
    <h1 className="sinsentido" fixed="top">Yogademy</h1>
  </div>
  </>
);
//<UserArea loggedIn />

export default Header;
