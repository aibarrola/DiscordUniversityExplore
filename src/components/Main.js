import React from 'react';
import Home from '../components/pages/Home';
import Card from '../components/Card/card'
import '../components/Card/card.css'

function row() {
    return(
        <div className ="cardContainer">
                <Card orgName="Akbayan" orgDesc="Desc" />

                <Card orgName="Akbayan" orgDesc="Desc" />

                <Card orgName="Akbayan" orgDesc="Desc" />
        </div>
    )
}

function displayRow() {

    for(let i = 0; i < 3; i ++) {
        return row();
    }


}

function Main({page}){



    return(
        <div>
            <h4> {page} </h4> 

            {/* list of organizations */}

            {displayRow()}
            {displayRow()}
            {displayRow()}

            

        </div>
    )
}

export default Main;