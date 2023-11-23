import {useState} from 'react'
import CloseBtn from '../img/cerrar.svg'

function Modal({ setModal }) {

    const hideModal = () => {
        setModal(false);
    }

    return (
        <div className='modal'>
        <div className='cerrar-modal'>
            <img src={CloseBtn} alt="Close Modal" 
                onClick={hideModal}
            />
        </div>
        </div>
    )
}

export default Modal
