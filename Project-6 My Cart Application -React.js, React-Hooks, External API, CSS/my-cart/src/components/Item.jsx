import React, { useContext, useState } from 'react';
import Styles from '../styles/Item.module.css';
import { CartContext } from '../context/GlobalContext';


const Item = ({ title, price, img, id, onRemove }) => {
    const [curAmount, setAmount] = useState(0);
    const {increaseAmount, decreaseAmount, removeProduct} = useContext(CartContext);
    return (
        <div className={Styles.Item}>
            <img src={img} />
            <div className={Styles.InfoContainer}>
                <h1>{title}</h1>
                <h4>{price}</h4>
                <button onClick={()=>{removeProduct(id); onRemove(id)}}>remove</button>
            </div>
            <div className={Styles.QuantityContainer}>
                <button onClick={()=>{increaseAmount(id); setAmount(curAmount+1)}}>+</button>
                <p>{curAmount}</p>
                <button onClick={()=>{decreaseAmount(id); setAmount(Math.max(curAmount - 1, 0));}}>-</button>
            </div>
        </div>

    );
}

export default Item;