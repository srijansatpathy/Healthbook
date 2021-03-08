import './App.css';
import Dashboard from './Pages/Dashboard.js';
import  NavigationTab from './Navigation/NavigTab.js';
import SigninBox from './Pages/SigninPage.js';
import {BrowserRouter as Router, Switch, Route} 
from 'react-router-dom';
import Table from "./Pages/Table";
import React from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './Cards/Cards.jsx'


function App() {


  return (
    <Router>
      {/* <NavigationTab /> */}
      <Switch>
        <Route path='/' exact component={SigninBox}/>
        <Route path='/dashboard' component={Dashboard}  />
        <Route path='/admin' component={Table} />
        <Route exact path='/profile' component={Card} />
      </Switch>
    </Router>  

    
  );
}

export default App;
