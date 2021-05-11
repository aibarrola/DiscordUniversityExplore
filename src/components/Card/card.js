import React from 'react'
import './card.css'

function Card({orgName, orgDesc, orgLink, orgImgLink}){
    return(

        <>

            <div className="card">
                <a href= {orgLink} target="_blank">

                    <div className="cardPhoto">
                        <img className="resize" src={orgImgLink}/>
                    </div>

                    <div className="cardContent">
                        <h1 className="cardTitle"> {orgName} </h1>
                        <h4 className="cardDesc"> {orgDesc}</h4>
                    </div>
                </a>
            </div>

        </>
    )
}

export default Card;