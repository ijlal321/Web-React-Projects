import React, { useState } from 'react';
import styles from '../Styles/SearchArea.module.css';
import availableOptions from "../Data/Data"

const SearchArea = ({onSearchClick}) => {

    const [searchText, setSearchText] = useState("");
    return (
        <div className={styles.SearchArea}>
            <input placeholder='enter ingedrient' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <select>
                {availableOptions.map((opt, index) => (
                    <option key={index} value={opt}>{opt}</option>
                ))}
            </select>
            <button onClick={onSearchClick}>get recepie</button>
        </div>
    );
}

export default SearchArea;