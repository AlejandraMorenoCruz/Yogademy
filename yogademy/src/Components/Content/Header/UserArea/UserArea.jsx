import React from 'react';
import withRouter from 'react-router-dom/withRouter';

const UserArea = ({ location }) =>(
  <>
    {location.pathname.includes('/study')}
  </>
);
export default withRouter(UserArea);
