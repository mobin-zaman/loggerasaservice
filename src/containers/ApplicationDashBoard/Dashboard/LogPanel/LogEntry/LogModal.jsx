import React from 'react';
import style from './style.module.css';
import Modal from "react-modal";


const LogModal = ({log, isOpen, onCancel}) =>  {

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

                    <span className={style.modal_span}>TIMESTAMP</span><pre className={style.pre_time_stamp}>{log.created_at}</pre>
                    <span className={style.modal_span}>TYPE</span><pre className={style.pre_type}>{log.type}</pre>
                    <span className={style.modal_span}>LOG</span><pre className={style.pre_log}>{log.description}</pre>
                    <button className={style.modal_button} type ="button" onClick={onCancel}>Back</button>
                </Modal>
            )
    ;
}

export default LogModal;
