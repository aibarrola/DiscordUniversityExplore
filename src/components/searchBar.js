import React from 'react';

const SearchBar = ({
    changeSearchText
}) => {
    return (
        <div>
            <input
                type="text"
                id="header-search"
                placeholder="Explore communities"
                name="s" 
                onChange={changeSearchText}
                style={{
                    width: "50%",
                    height: "56px",
                    position: "relative",
                    "background-color": "rgba(255,255,255)",
                    transition: "0.3s all",
                    "padding-left": "10px",
                    "padding-right": "10px",
                    "border-radius": "10px"
                  }}
            />
        </div>
)
};

export default SearchBar;


