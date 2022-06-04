import styles from './MealItemForm.module.scss'
import Input from "../../../UI/Input/Input";
import React, { useRef, useState } from 'react'

const MealItemForm = (props) => {
    const amountInputRef = useRef(null)
    const [isAmountValid, setIsAmountValid] = useState(true)
    const submitHandler = (event) => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value
        const enteredNumberAmount = +enteredAmount

        if (enteredAmount.trim().length === 0 || enteredAmount.length < 0 || enteredAmount > 5) {
            setIsAmountValid(false);
            return;
        }
        props.onAddItemToCart(enteredNumberAmount)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input = {{
                id: 'amount' + props.id,
                type: 'number',
                min: 1,
                max: 5,
                step: 1,
                defaultValue:1
            }} />
            <button>+ Add</button>
            {!isAmountValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm