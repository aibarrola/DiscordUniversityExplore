import React from 'react';
import './SideButton.css'

function SideButton({name}){
    return(
        <button className="sideButton"> {name} </button>
    )
}

export default SideButton;