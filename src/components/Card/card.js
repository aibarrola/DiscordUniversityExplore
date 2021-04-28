import React from 'react'
import './card.css'

function Card({orgName, orgDesc}){
    return(
        <div className="card">
            <h1 className="cardTitle"> {orgName} </h1>
            <h4 className="cardDesc"> {orgDesc}</h4>
        </div>
    )
}

export default Card;