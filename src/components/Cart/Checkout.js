import React, { useRef, useState } from "react"
import styles from './Checkout.module.scss'

const Checkout = (props) => {

    const nameRef = useRef()
    const streetRef = useRef()
    const postalCodeRef = useRef()
    const cityRef = useRef()

    const [checkFormValidity, setCheckFormValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    })

    const isValueEmpty = value => value.trim() === ''
    const isNotFIveChars = value => value.trim().length !== 5

    const confirmHandler = (event) => {
        event.preventDefault()
        const enteredName = nameRef.current.value
        const enteredStreet = streetRef.current.value
        const enteredPostalCode = postalCodeRef.current.value
        const enteredCity = cityRef.current.value

        const enteredNameIsValid = !isValueEmpty(enteredName)
        const enteredStreetIsValid = !isValueEmpty(enteredStreet)
        const enteredCityIsValid = !isValueEmpty(enteredCity)
        const enteredPostalCodeIsValid = !isNotFIveChars(enteredPostalCode)

        setCheckFormValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeIsValid,
            city: enteredCityIsValid
        })

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid

        if (formIsValid) {
            console.log(enteredStreet, enteredName, enteredPostalCode, enteredCity)

            nameRef.current.value = ''
            streetRef.current.value = ''
            postalCodeRef.current.value = ''
            cityRef.current.value = ''
        }
    }

    return <>
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={`${styles.control} ${checkFormValidity.name ? '' : styles.invalid}`}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    ref={nameRef}
                />
                {!checkFormValidity.name && <p>Please enter a valid Name</p>}
            </div>
            <div className={`${styles.control} ${checkFormValidity.street ? '' : styles.invalid}`}>
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    ref={streetRef}
                    // value={street}
                />
                {!checkFormValidity.street && <p>Please enter a valid Street</p>}
            </div>
            <div className={`${styles.control} ${checkFormValidity.postalCode ? '' : styles.invalid}`}>
                <label htmlFor="postal">Postal code</label>
                <input
                    type="text"
                    id="postal"
                    ref={postalCodeRef}
                    // value={postalCode}
                />
                {!checkFormValidity.postalCode && <p>Please enter a valid Postal Code</p>}
            </div>
            <div className={`${styles.control} ${checkFormValidity.city ? '' : styles.invalid}`}>
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    ref={cityRef}
                    // value={city}
                />
                {!checkFormValidity.city && <p>Please enter a valid City</p>}
            </div>
            <div className={styles.actions}>
                <button
                    type="button" onClick={props.onCancel}>Cancel</button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
    </>
}

export default Checkout