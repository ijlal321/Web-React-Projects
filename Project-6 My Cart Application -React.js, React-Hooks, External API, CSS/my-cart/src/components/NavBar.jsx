import React from 'react';
import Styles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <div className={Styles.NavBar}>
            <h2>Hot Deals</h2>
            <div className={Styles.Cart}>
                <h2>cart</h2>
                <p className={Styles.NrItems} >0</p>
            </div>
        </div>
    );
}

export default NavBar;