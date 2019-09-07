import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import StartPage from './containers/start-page';
import Login from "./containers/login";
import Register from "./containers/register";
import AppPage from "./containers/app-page";
import Dashboard from "./containers/dashboard";
import CustomerDashboard from "./containers/customer-dashboard";


function App() {
  return (
    <Router>
      <Route path="/" exact component={StartPage}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/app" component={AppPage}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/customerdashboard" component={CustomerDashboard}/>
    </Router>
  );
}

export default App;
