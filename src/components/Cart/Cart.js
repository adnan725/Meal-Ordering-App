import styles from './Cart.module.scss';
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";
import CartItem from "./CartItem/CartItem"
import Checkout from './Checkout'

const Cart = (props) => {

    const [isForm, setIsForm] = useState(false)

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

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isForm && <Checkout onCancel={props.onClose}/>}
            {!isForm &&  modalActions}
        </Modal>
    )
}

export default Cart