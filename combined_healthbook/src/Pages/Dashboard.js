import React from 'react';
import '../index.css'
import '../Pages/Dashboard.css'
import  NavigationTab from '../Navigation/NavigTab.js';
import checkadmin from "../Pages/SigninPage.js"
import Writeposts from './Writeposts';
import Posts from "./DisplayPosts";

function Dashboard() {

    let checkStatus = "false";

    if(checkadmin)
        checkStatus = "true"
        
    return (
        
        <>
        <NavigationTab admin={checkStatus}/>
        {/* <Writeposts/> */}

        <Posts />
            
        </>

        
        
    );
}


export default Dashboard;