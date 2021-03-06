import React from 'react';

// Import Icons
import * as BootsIcons from "react-icons/bs";
import * as RemixIcons from "react-icons/ri";
import * as GrommIcons from "react-icons/gr";
import * as IcomoIcons from "react-icons/im";
import * as FontaweIcons from "react-icons/fa";
import * as FlatcolorIcons from "react-icons/fc";

// A list of side menu info
export const SideMenuInfo = [

    // Side tab #1
    {
        title: 'Profile',
        path:   '/profile',
        icon: <FlatcolorIcons.FcReading />,
        classFormat: 'menuText'
    },

    // Side tab #3
    {
        title: 'Posts',
        path:   '/posts',
        icon: <FlatcolorIcons.FcOrgUnit />,
        classFormat: 'menuText'
    },

    // Side tab #4
    {
        title: 'Group',
        path:   '/group',
        icon: <FlatcolorIcons.FcCollaboration />,
        classFormat: 'menuText'
    }

 
] 
