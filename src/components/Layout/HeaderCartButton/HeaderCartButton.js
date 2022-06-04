import React, { useContext, useState, useEffect } from 'react';
import styles from './HeaderCartButton.module.scss'
import CartIcon from '../../Cart/CartIcon';
import CartContext from "../../../store/cart-context";
const HeaderCartButton = (props) => {

    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)

    const { items } = cartCtx

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    const buttonClasses = `${styles.button} ${buttonIsHighlighted && styles.bump}`
    useEffect(() => {
        if(cartCtx.items.length === 0) {
            return
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return <button className={buttonClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton