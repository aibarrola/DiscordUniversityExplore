import React from 'react';
import './SideButton.css'
  
function SideButton({buttonName, iconName,page, changePage, bgColor}){
    return(
        <p className='sideButton' onClick={() => changePage(page)}><i className="small material-icons">{iconName}</i>  {buttonName} </p>
        )
}

export default SideButton;