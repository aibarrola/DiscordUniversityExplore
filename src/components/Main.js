import React, { useState } from "react";
import Home from '../components/pages/Home';
import Card from '../components/Card/card'
import '../components/Card/card.css'

let organizations = [
    { orgName: "SASE", orgDesc: "This is Prepares Asian heritage scientists and engineers for success in the business world." },
    { orgName: "ACM SIGGRAPH", orgDesc: "Formed out of a need to represent students with an interest in computer graphicsE" },
    { orgName: "HopLite", orgDesc: "Practice Leetcode" },
    { orgName: "SASE", orgDesc: "This is Prepares Asian heritage scientists and engineers for success in the business world." },
    { orgName: "ACM SIGGRAPH", orgDesc: "Formed out of a need to represent students with an interest in computer graphicsE" },
    { orgName: "HopLite", orgDesc: "Practice Leetcode" }
]

function Main({ page }) {


    const initialOrgData = Object.freeze({
        orgName: "",
        orgDesc: "",
        orgType: "",
        orgLink: ""
    });

    const [formData, updateFormData] = React.useState(initialOrgData);
    const [orgs, setOrgs] = useState(organizations);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()

        });
    };

    //returns a row 
    function toRow(row) {
        let cardRow = []
        function card() {
            for (let i = 0; i < row.length; i++) {
                cardRow.push(row[i]);
            }
            return cardRow;
        }
        return (
            <div className="cardContainer">
                {card()}
            </div>
        )
    }

    function toCard(org) {
        return (
            <Card orgName={org.orgName} orgDesc={org.orgDesc} orgLink={org.orgLink} />
        )
    }

    //pseudocode: if the row has hit 3, push the current row into rows, then start a new row
    function display() {
        let row = [];
        let rows = [];

        //organize the cards
        for (let i = 0; i < orgs.length; i++) {
            if ((i + 1) % 3 == 0 && i != 0) {
                row.push(toCard(orgs[i])); //push the 3rd col, before  adding the row
                rows.push(row);
                row = [];
            } else {
                row.push(toCard(orgs[i]));
            }
        }
        if (row.length != 0) {
            rows.push(row);
        }

        //display the cards

        let newList = [];
        for (let i = 0; i < rows.length; i++) {
            newList.push(toRow(rows[i])); //convert each row to a card component
        }
        return newList;

    }

    function addCard(org) {


        setOrgs(organizations => [...organizations, org]);
        console.log("pushing new card: ");
        console.log(orgs[orgs.length - 1]);;

    }




    const orgForm = () => {

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
                <label>
                    Organization Type
                <input name="orgType" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Organization Link
                <input name="orgLink" onChange={handleChange} />
                </label>
                <br />
                <button onClick={() => addCard(formData)}>Submit</button>
            </>
        );
    };

    return (
        <div>
            <h4> {page} </h4>
            {orgForm()}
            {display()}
        </div>
    )
}

export default Main;