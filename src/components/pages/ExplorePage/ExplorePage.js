import React, {useState} from 'react';

import Sidebar from '../../Sidebar'
import Header from '../../Header'
import Main from '../../Main'


import './ExplorePage.css'

let home_array = [
    { orgName: "SASE", orgDesc: "This is SASE" },
    { orgName: "SASE", orgDesc: "This is SASE" },
    { orgName: "SASE", orgDesc: "This is SASE" },
    { orgName: "SASE", orgDesc: "This is SASE" },
    { orgName: "SASE", orgDesc: "This is SASE" },
    { orgName: "SASE", orgDesc: "This is SASE" },
    { orgName: "SASE", orgDesc: "This is SASE" },
    { orgName: "SASE", orgDesc: "This is SASE" },
    { orgName: "SASE", orgDesc: "This is SASE" },]

let cultural_array = [];
let academic_array = [];
let religious_array = [];
let sports_array = [];
let specialInterest_array = [];
let fraternity_array = [];
let sorority_array = [];

function select_array(page) {
    if(page == "Home") {return home_array}
    if(page == "Cultural") {return cultural_array}
    if(page == "Academic") {return academic_array}
    if(page == "Religious") {return religious_array}
    if(page == "Club Sports") {return sports_array}
    if(page == "Special Interest") {return specialInterest_array}
    if(page == "Fraternity") {return fraternity_array}
    if(page == "Sorority") {return sorority_array}
}


function ExplorePage(){

    const [page, setPage] = useState("Home")
    const [orgs,setOrgs] = useState(select_array("Home"));

    
    const changePage = newPage =>{
        setPage(newPage);      
        setOrgs(select_array(newPage)); 
        console.log("page changed to " + newPage); 
    }

    return(
        <div>
            <div className="row">

                <div className="col s3 fixed-sidebar">
                    <Sidebar changePage={changePage}/>
                </div>

                <div className="col s9">
                
                    <div className="row">
                        <Header />
                    </div>

                    <div className="row">
                        <Main  page={page} organizations ={orgs}/>
                    </div>

                </div>

            </div>
          

          
                

        </div>
    )
}

export default ExplorePage;