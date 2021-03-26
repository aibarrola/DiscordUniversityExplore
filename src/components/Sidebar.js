import React,{useState} from 'react';
import './Sidebar.css'


import SideButton from './SideButton'

function Sidebar({changePage}){



    return(
        <div className="sidebar">
            <h1 className="sidebarTitle">
                Discover
            </h1>
            
            <SideButton iconName="home" buttonName= "Home" page="Home" changePage={changePage}/>
            <SideButton iconName="ac_unit"  buttonName= "Cultural" page="Cultural" changePage={changePage} />
            <SideButton iconName="school"  buttonName= "Academic" page="Academic" changePage={changePage}/>
            <SideButton iconName="brightness_7"  buttonName= "Religious" page="Religious" changePage={changePage}/>
            <SideButton iconName="directions_run"  buttonName= "Club Sports" page="Club Sports" changePage={changePage}/>
            <SideButton iconName="fingerprint"  buttonName= "Special Interest" page="Special Interest" changePage={changePage}/>
            <SideButton iconName="people"  buttonName= "Fraternity" page="Fraternity" changePage={changePage} />
            <SideButton iconName="people_outline"  buttonName= "Sorority" page="Sorority" changePage={changePage} />

        </div>
    )
}

export default Sidebar;