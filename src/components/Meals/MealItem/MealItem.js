import React, { Fragment } from 'react';
import styles from './MealItem.module.scss';
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    return <Fragment>
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.price}>{price}</p>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    </Fragment>
}

export default MealItem

