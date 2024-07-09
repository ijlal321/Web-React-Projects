import React, { useContext } from 'react';
import Styles from '../styles/NavBar.module.css';
import { CartContext } from '../context/GlobalContext';


const NavBar = () => {
    const {getTotal } = useContext(CartContext);
    return (
        <div className={Styles.NavBar}>
            <h2>Hot Deals</h2>
            <div className={Styles.Cart}>
                <h2>cart</h2>
                
                <p className={Styles.NrItems} >{getTotal()}</p>
            </div>
        </div>
    );
}

export default NavBar;