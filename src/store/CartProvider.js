import React, { useReducer } from 'react';
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}

const CartProvider = (props) => {

    const [stateCart, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemsToCartHandler = (item) => {
        dispatchCart({type: 'ADD', item: item})
    }

    const removeItemsFromCartHandler = (id) => {
        dispatchCart({type: 'REMOVE', id: id})
    }

    const cartContext = {
        items: stateCart.items,
        totalAmount: stateCart.totalAmount,
        addItems: addItemsToCartHandler,
        removeItems: removeItemsFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider