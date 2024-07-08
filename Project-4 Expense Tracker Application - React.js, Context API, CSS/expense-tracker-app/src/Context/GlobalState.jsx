import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1, label: "flower", amount: +100 },
    { id: 2, label: "flower2", amount: -200 },
    { id: 3, label: "flower3", amount: +300 },
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function getNewId(){
    
    return state.transactions.length > 0 ? (state.transactions[state.transactions.length - 1].id + 1) : 0;
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
    getNewId
  }}>
    {children}
  </GlobalContext.Provider>);
}