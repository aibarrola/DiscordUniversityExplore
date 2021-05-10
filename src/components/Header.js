import React from 'react';
import './Header.css'
import SearchBar from './searchBar';


function Header({
    changeSearchText
}){
    return(
        <div className="header">
            <div className="banner">
                <h4 className="headerTitle"> Find your community in SJSU </h4> 
                <SearchBar changeSearchText={changeSearchText}></SearchBar>
                {/* <input type="text" onChange={changeSearchText}></input> */}
            </div>
        </div>
    )
}

export default Header;