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
    const RenderLogTypes = ({logType}) => {
        switch (logType) {
            case "ERROR":
                return <div className={style.log_type_error}>{logType}</div>
            case "WARN":
                return <div className={style.log_type_warn}>{logType}</div>
            case "INFO":
                return <div className={style.log_type_info}>{logType}</div>
            default:
                return <div className={style.log_type_others}>{logType}</div>
        }
    }


    return (
                <Modal isOpen={isOpen} style={customStyle}
                       onRequestClose={onCancel}>

                    <span className={style.modal_span}>TIMESTAMP</span><pre className={style.pre_time_stamp}>{log.created_at}</pre>
                    <span className={style.modal_span}>TYPE</span><pre className={style.pre_type}><RenderLogTypes logType={log.type}/> </pre>
                    <span className={style.modal_span}>LOG</span><pre className={style.pre_log}>{log.description}</pre>
                    <button className={style.modal_button} type ="button" onClick={onCancel}>Back</button>
                </Modal>
            )
    ;
}

export default LogModal;
