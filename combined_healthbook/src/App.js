import './App.css';
import Dashboard from './Pages/Dashboard.js';
import  NavigationTab from './Navigation/NavigTab.js';
import SigninBox from './Pages/SigninPage.js';
import {BrowserRouter as Router, Switch, Route} 
from 'react-router-dom';
import Table from "./Pages/Table";
import React from "react";

function App() {


  return (
    <Router>
      {/* <NavigationTab /> */}
      <Switch>
        <Route path='/' exact component={SigninBox}/>
        <Route path='/dashboard' component={Dashboard}  />
        <Route path='/admin' component={Table} />
      </Switch>
    </Router>  

    
  );
}

export default App;
