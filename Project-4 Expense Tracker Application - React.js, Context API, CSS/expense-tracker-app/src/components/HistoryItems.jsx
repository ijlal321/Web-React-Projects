import React, { useContext } from 'react';
import Style from '../Styles/HistoryItems.module.css';
import { GlobalContext } from '../Context/GlobalState';

const HistoryItems = ({name, amount, id}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <div className={Style.HistoryItem} onClick={()=>(deleteTransaction(id))}>
            <p>{name}</p>
            <p>{amount}</p>
        </div>
    );
}

export default HistoryItems;