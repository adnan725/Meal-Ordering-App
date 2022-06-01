import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg'
import styles from './Header.module.scss'

const Header = (props) => {
    return <Fragment>
        <header className={styles.header}>
            <h1>Healthy Meals</h1>
            <button>Cart</button>
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="meals"/>
        </div>
    </Fragment>
}

export default Header