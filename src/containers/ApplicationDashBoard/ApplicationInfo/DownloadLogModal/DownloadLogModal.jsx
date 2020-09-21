import React, {useState} from 'react';
import style from './style.module.css';
import Modal from "react-modal";


const DownloadLogModal = ({isOpen, onCancel}) =>  {

    const customStyle = {
        // overlay: {
        //     opacity: 0.5
        // },
        content: {
            backgroundColor: '#181A1B'
        }
    }

    return (
        <Modal isOpen={isOpen} style={customStyle}
               onRequestClose={onCancel}>

            <span><button>Download CSV</button></span>
            <span><button>Download Json</button></span>
            <button className={style.modal_button} type ="button" onClick={onCancel}>Back</button>
        </Modal>
    )
        ;
}

export default DownloadLogModal;
