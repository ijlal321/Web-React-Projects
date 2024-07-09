// CartContext.js
import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

export const CartContext = createContext();

const initialState = {
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Actions
    function increaseAmount(id) {
        dispatch({
            type: "increase amount",
            payload: id
        });
    }

    function decreaseAmount(id) {
        dispatch({
            type: "decrease amount",
            payload: id
        });
    }

    function getTotal() {
        let sum = 0;
        Object.keys(state).forEach(id => {
            sum += state[id];
        });
        return sum;
    }

    function removeProduct(id) {
        dispatch({
            type: "remove product",
            payload: id
        });
    }

    return (
        <CartContext.Provider
            value={{
                cart: state,
                increaseAmount,
                decreaseAmount,
                getTotal,
                removeProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
