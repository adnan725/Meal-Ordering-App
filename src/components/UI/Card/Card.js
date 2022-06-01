import styles from './Card.module.scss'

const Card = (props) => {
    return <fragment>
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    </fragment>
}

export default Card