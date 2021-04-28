import React from 'react';
import Home from '../components/pages/Home';
import Card from '../components/Card/card'
import '../components/Card/card.css'

function Main({page}){






    return(
        <div>
            <h4> {page} </h4> 

            {/* list of organizations */}

            <div className="cardContainer">
                
                <Card orgName="Akbayan" orgDesc="Desc" />

                <Card orgName="Akbayan" orgDesc="Desc" />

                <Card orgName="Akbayan" orgDesc="Desc" />

            </div> 

            <div className="cardContainer">
                
                <Card orgName="Akbayan" orgDesc="Desc" />

                <Card orgName="Akbayan" orgDesc="Desc" />

                <Card orgName="Akbayan" orgDesc="Desc" />

            </div> 

            <div className="cardContainer">
                
                <Card orgName="Akbayan" orgDesc="Desc" />

                <Card orgName="Akbayan" orgDesc="Desc" />

                <Card orgName="Akbayan" orgDesc="Desc" />

            </div> 

            

        </div>
    )
}

export default Main;