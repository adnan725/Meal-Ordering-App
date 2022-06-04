import React, { Fragment, useContext } from 'react';
import styles from './MealItem.module.scss';
import MealItemForm from "./MealItemForm/MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {

    const cartCtx = useContext(CartContext)

    const addItemToCartHandler = (amount) => {
        cartCtx.addItems({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    const price = `$${props.price.toFixed(2)}`
    return <Fragment>
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.price}>{price}</p>
            </div>
            <div>
                <MealItemForm onAddItemToCart={addItemToCartHandler}/>
            </div>
        </li>
    </Fragment>
}

export default MealItem

