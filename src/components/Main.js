import React, { useState } from "react";
import Home from '../components/pages/Home';
import Card from '../components/Card/card'
import '../components/Card/card.css'

let organizations = [ {orgName:"SASE", orgDesc:"This is SASE"},
             {orgName:"SASE", orgDesc:"This is SASE"}, 
             {orgName:"SASE", orgDesc:"This is SASE"}, 
             {orgName:"SASE", orgDesc:"This is SASE"} ]


// const state = {
//     orgs: [ {orgName:"SASE", orgDesc:"This is SASE"},
//             {orgName:"SASE", orgDesc:"This is SASE"}, 
//             {orgName:"SASE", orgDesc:"This is SASE"}, 
//             {orgName:"SASE", orgDesc:"This is SASE"} ]
// }




//returns a row 
function toRow(row) {
    let cardRow = []
    function card() {
        for(let i = 0; i < row.length; i++) {
            cardRow.push(row[i]);
        }
        return cardRow;
    }
    return(
        <div className ="cardContainer">
            {card()}
        </div>
    )
}

function toCard(org) {
    return(
        <Card orgName={org.orgName} orgDesc={org.orgDesc} />
    )
}

//pseudocode: if the row has hit 3, push the current row into rows, then start a new row
function display() {
    let row = [];
    let rows = [];

    //organize the cards
    for(let  i = 0; i < organizations.length; i++) {
        if((i+1) % 3 == 0 && i != 0) { 
            row.push(toCard(organizations[i])); //push the 3rd col, before  adding the row
            rows.push(row);
            row = [];
        } else {
            row.push(toCard(organizations[i]));
        }
    }
    if(row.length != 0) {
        rows.push(row);
    }

    //display the cards

    let newList  =[];
    for(let i = 0; i < rows.length; i++) {
        newList.push(toRow(rows[i])); //convert each row to a card component
    }
    return newList;

}

function AddCard(org) {
    //const [orgs, setOrgs] = useState(organizations);
    //const [orgs, dispatch] = React.useReducer(reducer, initialState);

    organizations.push(org);
    console.log("pushing new card: "); 
    console.log(organizations[organizations.length-1]);;

}


const initialOrgData = Object.freeze({
    orgName: "",
    orgDesc: ""
  });

const OrgForm = () => {
    const [formData, updateFormData] = React.useState(initialOrgData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
            
        });
    };

    const handleSubmit = (e) => {
        //e.preventDefault()
        AddCard(formData);
        
    };

    return (
        <>
            <label>
                Organization Name
          <input name="orgName" onChange={handleChange} />
            </label>
            <br />
            <label>
                Organization Description
          <input name="orgDesc" onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
};


function Main({page}){
    return(
        <div>
            <h4> {page} </h4> 
            {OrgForm()}
            {display()}
        </div>
    )
}

export default Main;