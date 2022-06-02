import React, { Fragment } from 'react';
import styles from './Modal.module.scss';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className={styles.backdrop}></div>
}

const ModalOverlay = (props) => {
    return <div className={styles.modal}>
        <div>{props.children}</div>
    </div>
}

const Modal = (props) => {

    const portalElement = document.getElementById('overlays')
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}

export default Modal