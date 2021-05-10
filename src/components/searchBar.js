import React from 'react';

const SearchBar = ({
    changeSearchText
}) => {
    return (
        <div>
            <input
                type="text"
                id="header-search"
                placeholder="Search..."
                name="s" 
                onChange={changeSearchText}
                style={{
                    width: "50%",
                    height: "56px",
                    "border-radius": "50px",
                    position: "relative",
                    "background-color": "rgba(255,255,255,0.3)",
                    transition: "0.3s all",
                    "padding-left": "10px",
                    "padding-right": "10px"
                  }}
            />
        </div>
)
};

export default SearchBar;


