import styles from './Cart.module.scss';
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";
import CartItem from "./CartItem/CartItem"
import Checkout from './Checkout'

const Cart = (props) => {

    const [isForm, setIsForm] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)

    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const addItemsToCartHandler = (item) => {
        cartCtx.addItems({ ...item, amount: 1})
    }

    const removeItemsFromCartHandler = (id) => {
        cartCtx.removeItems(id)
    }

    const orderHandler = () => {
        setIsForm(true)
    }

    const cartItems = <ul className={styles['cart-items']}>
        {cartCtx.items.map(item => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={addItemsToCartHandler.bind(null, item)}
                onRemove={removeItemsFromCartHandler.bind(null, item.id)}
            />
        ))}

    </ul>

    const modalActions = <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}
    </div>

    const orderConfirmHandler = async (userData) => {
        setIsSubmitting(true)
        await fetch('https://meals-project-f49bf-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                order: cartCtx.items
            })
        })
        setIsSubmitting(false)
        setDidSubmit(true)
    }

    const modal = <>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isForm && <Checkout onConfirm={orderConfirmHandler} onCancel={props.onClose}/>}
        {!isForm &&  modalActions}
    </>

    const isSubmittingContent = <p>Your order is submitting...</p>
    const didSubmitContent = <>
        <p>Your order is submitted successfully</p>
        <div className={styles.actions}>
            <button className={styles.actions} onClick={props.onClose}>Close</button>
        </div>
    </>

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && modal}
            {isSubmitting && isSubmittingContent}
            {!isSubmitting && didSubmit && didSubmitContent}
        </Modal>
    )
}

export default Cart