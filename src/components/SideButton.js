import React from 'react';
import './SideButton.css'

function SideButton({name, iconName}){
    return(
        <p className="sideButton"><i className="small material-icons">{iconName}</i> {name} </p>
        )
}

export default SideButton;