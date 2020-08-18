import React, {useState} from 'react';
import {Table, Column } from "react-virtualized";
import 'react-virtualized/styles.css'; // only needs to be imported once
import style from "./LogEntry/style.module.css";
import Modal from "react-modal";

const LogPanel = ({logs}) => {

    const [isLogModalOpen, setLogModalOpen] = useState(false);

    const renderLogs = ({cellData}) => (
        <span className={style.span_description}>{cellData}</span>
    )


    const rowClickHandler = ({index}) => {
        console.log("index of the row",index);
        setLogModalOpen(true)
    }

    return (
        <>
        <Table
            width={1350}
            height={700}
            headerHeight={20}
            rowHeight={30}
            rowCount={logs.length}
            rowGetter={({index})=>logs[index]}
            onRowClick={rowClickHandler}
        >

            <Column label="timestamp" dataKey="created_at" width={150}/>
            <Column label="type" dataKey="type" width={100} />
            <Column width={1000} className={style.span_description} label="log" dataKey="description" cellRenderer={(cellData)=> renderLogs(cellData)}/>
        </Table>

        <Modal isOpen={isLogModalOpen}
            onRequestClose = { () => setLogModalOpen(false)}
        >hello</Modal>

            </>

    )
}

export default  LogPanel;