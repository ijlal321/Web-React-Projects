import React from 'react';
import '../styles/MenuSelector.css';
import { categories } from '../data';

const MenuSelector = ({ onMenuChange }) => {
    return (
        <div className='MenuSelector'>
            {categories.map((category, index)=>{
                return <button
                key={index}
                type="button"
                className="filter-btn"
                onClick={()=>(onMenuChange({category}))}
                >
                <h4>{category}</h4>
            </button>
            })}

        </div>
    );
}

export default MenuSelector;