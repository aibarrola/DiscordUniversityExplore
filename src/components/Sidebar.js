import React from 'react';
import './Sidebar.css'

import SideButton from './SideButton'

function Sidebar(){
    return(
        <div className="sidebar">
            <h1 className="sidebarTitle">
                Discover
            </h1>
            <SideButton iconName="home" name= "Home" /> 
            <SideButton iconName="ac_unit" name= "Cultural" />
            <SideButton iconName="school" name= "Academic" />
            <SideButton iconName="brightness_7" name= "Religious" />
            <SideButton iconName="directions_run" name= "Club Sports" />
            <SideButton iconName="fingerprint" name= "Special Interest" />
            <SideButton iconName="people" name= "Fraternity" />
            <SideButton iconName="people_outline" name= "Sorority" />


        </div>
    )
}

export default Sidebar;