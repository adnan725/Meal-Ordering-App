import React, { Fragment } from 'react';
import styles from './MealItem.module.scss'

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    return <Fragment>
        <div className={styles.meal}>
            <h3>{props.name}</h3>
            <p className={styles.description}>{props.description}</p>
            <p className={styles.price}>{price}</p>
        </div>
    </Fragment>
}

export default MealItem

