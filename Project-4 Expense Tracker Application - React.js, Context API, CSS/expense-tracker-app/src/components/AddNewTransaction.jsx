import React, { useContext, useState } from 'react';
import Styles from '../Styles/AddNewTransaction.module.css';
import { GlobalContext } from '../Context/GlobalState';

const AddNewTransaction = () => {
    const [label, setLabel] = useState("");
    const [amount, setamount] = useState(0);

    const {addTransaction, getNewId} = useContext(GlobalContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction({id:getNewId(), label:label, amount:parseInt(amount)});
        setLabel("");
        setamount(0);
    }

    return (
        <div className={Styles.AddNewTransaction}>
            <h2>Add New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="transactionLabel">Label:</label>
                <input
                    type="text"
                    id="transactionLabel"
                    className={Styles.input}
                    placeholder="Enter label"
                    value={label}
                    onChange={(e)=>(setLabel(e.target.value))}
                />

                <label htmlFor="transactionAmount">Amount:</label>
                <input
                    type="number"
                    id="transactionAmount"
                    className={Styles.input}
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e)=>(setamount(e.target.value))}
                />

                <button type="submit" className={Styles.submitButton}>Add Transaction</button>
            </form>
        </div>
    );
}

export default AddNewTransaction;