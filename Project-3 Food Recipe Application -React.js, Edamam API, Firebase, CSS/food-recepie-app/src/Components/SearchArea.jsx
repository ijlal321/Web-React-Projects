import React, { useState } from 'react';
import styles from '../Styles/SearchArea.module.css';
import availableOptions from "../Data/Data"

const SearchArea = ({ onSearchClick }) => {

    const [searchText, setSearchText] = useState("");
    const [selectedOption, setSelectedOption] = useState(availableOptions[0]);

    function handle_button_click() {
        onSearchClick(searchText, selectedOption);
    }

    return (
        <div className={styles.SearchArea}>
            <input placeholder='enter ingedrient' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {availableOptions.map((opt, index) => (
                    <option key={index} value={opt}>{opt}</option>
                ))}
            </select>
            <button onClick={handle_button_click}>get recepie</button>
        </div>
    );
}

export default SearchArea;