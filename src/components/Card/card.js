import React from 'react';
import './Card.css'
  
function Card({title}){
    return(
        <p className='card'> {title} </p>
        )
}

export default Card;