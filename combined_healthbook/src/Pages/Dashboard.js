import React from 'react';
import '../index.css'
import '../Pages/Dashboard.css'
import  NavigationTab from '../Navigation/NavigTab.js';
import checkadmin from "../Pages/SigninPage"

function Dashboard() {

    let checkStatus = "false";

    if(checkadmin)
        checkStatus = "true"
        
    return (
        
        <>
        <NavigationTab admin={checkStatus}/>
        <h1 className="textTitle">
            Dashboard</h1>
            
        </>
        
    );
}


export default Dashboard;