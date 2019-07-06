/*import React from 'react';

const Logo = () => (
  <>
    <img src = "yogademy\src\logo.svg" height = "30px"/>
  </>
);

export default Logo;*/

import React from 'react';
import Link from 'react-router-dom/Link';
import logo from './logo.svg';

const Logo = () => (
  <Link to ="/">
    <img src = {logo} height = "30px"/>
    </Link>
);

export default Logo;

