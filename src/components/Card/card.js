import React from 'react'
import './card.css'

function Card({orgName, orgDesc, orgLink}){
    return(
        <div className="card">

            <h1 className="cardTitle"> {orgName} </h1>
            <h4 className="cardDesc"> {orgDesc}</h4>
            <p> {orgLink} </p> 
        </div>
    )
}

export default Card;