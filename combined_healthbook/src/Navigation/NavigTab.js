import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavigTab.css';
import { SideMenuInfo } from './SideMenu.js';
import { IconContext } from 'react-icons';

// Import Icons and Images
import logo_hea from '../Images/single_logo.png';
import logo_main from '../Images/final_logo.png';
import * as HeroIcons from "react-icons/hi";
import * as RemixIcons from "react-icons/ri";
import * as FontaweIcons from "react-icons/fa";
import * as BoxIcons from "react-icons/bi";
import * as FlatcolorIcons from "react-icons/fc";


// Main navigation display
function NavigationTab(props) {

    // create side bar variables
    const [sidebar, setSidebar] = useState(false);

    // sidebar switch
    const showSidebar = () => setSidebar(!sidebar);

    let isadmin = false;

    // Check for admin mode
    if(props.admin === "true")
        isadmin = true; 

    return (
        <>

        {/* Modify all the icon values below here */}
        <IconContext.Provider value ={{size: '18'}}>
        
        <div className="menuTab">

            
        {/*Display option items for the navigation
        and link them with paths*/}
        <NavItems icon={HeroIcons.HiViewList}>
            <DropdownMenu/>
        </NavItems>    

        <ProfilePic/> 
        <NavItems icon={FlatcolorIcons.FcHome} path= "/dashboard" />
        <NavItems icon={RemixIcons.RiChatSmile2Line} path= "/message" />
        <NavItems icon={RemixIcons.RiLogoutBoxLine} path= "/login" />
        
        <NavItems icon={RemixIcons.RiCheckboxBlankCircleLine} 
        path= "#" admin={isadmin}/>

        </div>  
        
        </IconContext.Provider>
        </>
    );
}


// Top navigation items display
function NavItems(props) {

    // states for drop down menu
    const [open, setOpen] = useState(false);

    // Drop down menu switch
    const openTab = () => setOpen(!open); 

    // Case 1: The admin navigation item
    if(props.admin === true)
    {
        return (
            <li className="navItem">
            <Link to="/admin" className="navButton" onClick={openTab}>
                <RemixIcons.RiAdminLine size="32"/> 
                        
                {open && props.children}
            </Link>
        </li>
        );
    }

    // Case 2: Other admin navigation item
    else {
        return (
            <li className="navItem">
                <Link to={props.path} className="navButton" onClick={openTab}>
                    <props.icon size="32"/> 
                            
                    {open && props.children}
                </Link>
            </li>
        );
    }
    
}

// Drop Down Menu for the navigation items
function DropdownMenu(){


    return (
        <ul className="dropdown">
        {/* Create links to main menus options in the list*/}
        {SideMenuInfo.map((item, index) => {
                        return (
                            <li key={index} className={item.classFormat}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
        })}
        </ul>
    );

}

function ProfilePic(){
    return (
        <li className="navItem"> 
            <img src={logo_hea} className="navButton" />
        </li>
        
        
    );
}

export default NavigationTab;