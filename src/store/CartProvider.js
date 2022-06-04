import React from 'react';
import CartContext from "./cart-context";

const CartProvider = (props) => {

    const addItemsToCartHandler = () => {}

    const removeItemsFromCartHandler = () => {}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItems: addItemsToCartHandler,
        removeItems: removeItemsFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider