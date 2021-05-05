import React from 'react';
import Home from '../components/pages/Home';
import Card from '../components/Card/card'
import '../components/Card/card.css'



function row() {

    let row = []
    function card() {
        for(let i = 0; i < 3; i++) {
            row.push(<Card orgName={"Card" + i} orgDesc="Desc" />)
        }
        return row;
    }

    return(
        <div className ="cardContainer">
            {card()}
        </div>
    )
}


function displayRow() {

    let rows = [];

    for(let i = 0; i < 3; i ++) {
        rows.push(row());
    }
    return rows;
}

function Main({page}){
    return(
        <div>
            <h4> {page} </h4> 
            {displayRow()}
        </div>
    )
}

export default Main;