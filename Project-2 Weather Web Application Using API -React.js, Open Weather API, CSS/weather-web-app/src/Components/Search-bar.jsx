import React, { useState } from 'react';
import '../Styles/SearchBar.css';

const SearchBar = ({ fetchWeatherData }) => {
    const [searchText, setSearchText] = useState("");

    function onSearchClick() {
        fetchWeatherData(searchText);
        setSearchText("");
    }

    return (
        <div className='SearchBar'>
            <h2>Enter Your Area</h2>
            <div className='inner-div'>
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Enter your area" />
                <button onClick={onSearchClick}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;