import React, {useEffect, useState} from 'react';
import style from './style.module.css';
import Modal from "react-modal";
import {getAllLogs} from "../../../../apiServices/apiService";
import CsvDownload from "react-json-to-csv";


const DownloadLogModal = ({isOpen, onCancel, applicationId, applicationName}) =>  {

    const customStyle = {
        // overlay: {
        //     opacity: 0.5
        // },
        content: {
            backgroundColor: '#181A1B'
        }
    }

    const [logs,setLogs] = useState('');
    const [logsLoading, setLogsLoading] = useState(false);

    useEffect(() =>{

        const getLogs = async () => {
            setLogsLoading(true);

            const downloadedLogs  = await getAllLogs(applicationId);


            setLogs(downloadedLogs.data.data);


            console.log('downloaded logs', downloadedLogs.data.data);



            setLogsLoading(false);
        }

        getLogs();

    }, [applicationId]);

    useEffect(() => {
        console.log("logs loaded: ", logs);

    }, [logs]);



    return (
        <Modal isOpen={isOpen} style={customStyle}
               onRequestClose={onCancel}>

            {!logsLoading ?
                (
                    <>
                    <span><CsvDownload data={logs} filename={applicationName+".csv"}>Download CSV</CsvDownload></span>
                    <span><button>Download Json</button></span>
                    <button className={style.modal_button} type ="button" onClick={onCancel}>Back</button>
                    </>
                ): (
                    <div>Loading...</div>
                )
            }
        </Modal>
    )
        ;
}

export default DownloadLogModal;
