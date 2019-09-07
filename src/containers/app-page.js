import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import AppNavbar from '../components/app/components/app-navbar';
import App from '../components/app/app-page';
import Bla from '../components/app/components/bla/bla';




function AppPage() {
  return (
    <Router>
      <AppNavbar/>
      <Route path="/" exact component={App}/>
      <Route path="/bla" exact component={Bla}/>
    </Router>
  );
}

export default AppPage;