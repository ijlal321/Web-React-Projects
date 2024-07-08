import React, { useContext } from 'react';
import Style from '../Styles/Balance.module.css';
import { GlobalContext } from '../Context/GlobalState';

const Balance = () => {
    var posBal = 0;
    var negBal = 0;
    var totalBalance = 0;
    const { transactions } = useContext(GlobalContext);

    const amount = transactions.map((trans) => (trans.amount))

    if (transactions.length > 0) {

        totalBalance = amount.reduce((acc, item) => acc += item, 0);

        posBal = amount.reduce((acc, item) => {
            return item >= 0 ? acc + item : acc;
        }, 0);

        negBal = amount.reduce((acc, item) => {
            return item < 0 ? acc + item : acc;
        }, 0);
    }
    console.log("hello");
    return (
        <div>
            <h2>Your Balance</h2>
            <h1>{totalBalance} usd</h1>
            <div className={Style.incomeExpenseBlock}>
                <div className='leftBlock'>
                    <h2>income</h2>
                    <p>{posBal}</p>
                </div>
                <div className='rightBlock'>
                    <h2>expense</h2>
                    <p>{(negBal * -1)}</p>
                </div>
            </div>
        </div>
    );
}

export default Balance;