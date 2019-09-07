import React from 'react';
import {Link} from "react-router-dom";


function AppNavbar() {
  return (
      <div>
    <h1><Link to='/'>homepage</Link></h1>
    <h1><Link to='/bla'>bla bla</Link></h1>
    </div>
  );
}

export default AppNavbar;