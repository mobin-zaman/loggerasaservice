import React, {useState} from 'react';
import {Table, Column } from "react-virtualized";
import 'react-virtualized/styles.css'; // only needs to be imported once
import style from "./style.module.css";
import LogModal from "./LogEntry/LogModal";

const LogPanel = ({logs}) => {

    const [isLogModalOpen, setLogModalOpen] = useState(false);
    const [logForModal, setLogForModal] = useState(null);


    const renderLogs = ({cellData}) => {
        return <span className={style.log_text_style}>{cellData}</span>
    }

    const renderLogTypes = ({cellData}) => {
        switch (cellData) {
            case "ERROR":
                return <div className={style.log_type_error}>{cellData}</div>
            case "WARN":
                return <div className={style.log_type_warn}>{cellData}</div>
            case "INFO":
                return <div className={style.log_type_info}>{cellData}</div>
            default:
                return <div className={style.log_type_others}>{cellData}</div>
        }
    }

    const renderTimeStamp = ({cellData}) => {
        return <span className={style.log_timestamp}>{cellData}</span>
    }


    const rowClickHandler = ({index}) => {
        console.log("index of the row",index);
        console.log("logs for modal", logs[index]);
        setLogForModal(logs[index]);
        setLogModalOpen(true)
    }

    const formatTimeStampHeader = () => {
        return (
            <p className={style.header_timestamp}> TIMESTAMP</p>
        )
    }

    const formatTypeHeader = () => {
        return (
            <p className={style.header_type}>TYPE</p>
        )
    }

    const formatLogHeader = () => {
        return (
            <p className={style.header_log}>LOG</p>
        )
    }

    return (
        <>
        <Table
            width={1350}
            height={700}
            headerHeight={25}
            rowHeight={45}
            rowCount={logs.length}
            rowGetter={({index})=>logs[index]}
            onRowClick={rowClickHandler}
        >

            <Column label="timestamp" headerRenderer={formatTimeStampHeader} dataKey="created_at" width={200} cellRenderer={(cellData)=> renderTimeStamp(cellData)}/>
            <Column label="type" headerRenderer={formatTypeHeader}  dataKey="type" width={100} cellRenderer={(celData)=> renderLogTypes(celData)}/>
            <Column width={1000} headerRenderer={formatLogHeader}  className={style.span_description} label="log" dataKey="description" cellRenderer={(cellData)=> renderLogs(cellData)}/>
        </Table>

            {isLogModalOpen && <LogModal isOpen={isLogModalOpen} onCancel={()=>setLogModalOpen(false)} log={logForModal}/>}

            </>

    )
}

export default  LogPanel;
