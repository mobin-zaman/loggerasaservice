import React from 'react';
import style from './style.module.css';
import Modal from "react-modal";


const LogModal = ({log, isOpen, onCancel}) =>  {

    return (
                <Modal isOpen={isOpen}
                       onRequestClose={onCancel}>

                    <pre>{log.created_at}</pre>
                    <pre>{log.type}</pre>
                    <pre>{log.description}</pre>
                </Modal>
            )
    ;
}

export default LogModal;
