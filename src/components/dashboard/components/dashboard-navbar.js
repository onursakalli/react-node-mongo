import React from 'react';
import {Link} from "react-router-dom";


function DashboardNavbar() {
  return (
      <div>
    <h1><Link to='/'>homepage</Link></h1>
    <h1><Link to='/addcustomer'>add customer</Link></h1>
    </div>
  );
}

export default DashboardNavbar;