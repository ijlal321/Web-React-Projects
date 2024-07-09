import React, { useState } from 'react';
import Styles from '../styles/Items.module.css';
import Item from './Item';
import dataRaw from "../data"

const Items = () => {
    const [data, setData] = useState(dataRaw);

    function onRemove(id){
        if (data.hasOwnProperty(id)) {
            const newData = { ...data };
            delete newData[id];
            setData(newData);
        }
    }
    return (
        <div className={Styles.Items}>
        {data.map((product, index) => {
            return <Item key={product.id} title={product.title} price={product.price} img={product.img} id={product.id} onRemove={onRemove}/>
        } )}
        </div>
    );
}

export default Items;