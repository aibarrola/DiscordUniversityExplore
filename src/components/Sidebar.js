import React from 'react';
import './Sidebar.css'

import SideButton from './SideButton'

function Sidebar(){
    return(
        <div className="sidebar">
            <h1 className="sidebarTitle">
                Discover
            </h1>
            <SideButton name= "Home" />
            <SideButton name= "Cultural" />
            <SideButton name= "Academic" />
            <SideButton name= "Religious" />
            <SideButton name= "Club Sports" />
            <SideButton name= "Special Interest" />
            <SideButton name= "Fraternity" />
            <SideButton name= "Sorority" />


        </div>
    )
}

export default Sidebar;