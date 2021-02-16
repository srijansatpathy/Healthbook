import './App.css';
import Dashboard from './Pages/Dashboard.js';
import  NavigationTab from './Navigation/NavigTab.js';
import {BrowserRouter as Router, Switch, Route} 
from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationTab />
      <Switch>
        <Route path='/' exact />
        <Route path='/dashboard' component={Dashboard}  />
      </Switch>
    </Router>  

    
  );
}

export default App;
