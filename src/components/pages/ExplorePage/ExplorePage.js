import React, {useState} from 'react';
import axios from "axios"

import Sidebar from '../../Sidebar'
import Header from '../../Header'
import Main from '../../Main'


import './ExplorePage.css'

let qs = require("querystring");

async function getCards(options={}) {
    let result = await axios
        .get(`/api/cards?${qs.stringify(options)}`)
        .then(res => res.data);
        console.log("result: " , result)
    return result;
}
let currentOrgs = [];
let currentPage = "Home";
let currentSearchString = "";

function ExplorePage(){

    const [page, setPage] = useState(currentPage);
    const [orgs, setOrgs] = useState(currentOrgs);
    const [search, setSearchString] = useState(currentSearchString);

    
    const changePage = async newPage =>{
        setPage(newPage);
        let cards = await getCards({
            category: newPage.replace(" ", "_").toUpperCase(),
            search
        })     
        setOrgs(cards);   
        console.log("page changed to " + newPage); 
    }

    const changeSearchText = async (event) =>{
        setSearchString(event.target.value);
        let cards = await getCards({
            category: page.replace(" ", "_").toUpperCase(),
            search: event.target.value
        })     
        setOrgs(cards);   
        console.log("Search with keyword: " + search); 
    }

    return(
        <div>
            <div className="row">

                <div className="col s3 fixed-sidebar">
                    <Sidebar changePage={changePage}/>
                </div>

                <div className="col s9">
                
                    <div className="row">
                        <Header changeSearchText={changeSearchText}/>
                    </div>
                    <div className="row">
                        <Main  page={page} organizations ={orgs} setOrgs={setOrgs}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExplorePage;