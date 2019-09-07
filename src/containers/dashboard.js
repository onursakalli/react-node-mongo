import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import DashboardNavbar from '../components/dashboard/components/dashboard-navbar';
import DashboardPage from '../components/dashboard/dashboard-page';
import Bla from '../components/app/components/bla/bla';




function Dashboard() {
  return (
    <Router>
      <DashboardNavbar/>
      <Route path="/" exact component={DashboardPage}/>
    
    </Router>
  );
}

export default Dashboard;