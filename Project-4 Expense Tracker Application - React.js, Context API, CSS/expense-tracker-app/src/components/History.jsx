import React, { useContext } from 'react';
import '../Styles/History.module.css';
import HistoryItems from './HistoryItems';
import { GlobalContext } from '../Context/GlobalState';


const History = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <h1>History</h1>
            {transactions.map((transaction, index) => {
                return <HistoryItems name={transaction.label} amount={transaction.amount} id={transaction.id}/>
            })}
        </div>
    );
}

export default History;