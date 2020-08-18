import React from 'react';
import {Table, Column } from "react-virtualized";
import 'react-virtualized/styles.css'; // only needs to be imported once
import style from "./LogEntry/style.module.css";

const LogPanel = ({logs}) => {
    const listHeight = 1000;
    const rowHeight = 100;
    const rowWidth = 850;
   const useDynamicRowHeight = true;


const renderLogs = ({cellData}) => (
        <span className={style.span_description}>{cellData.replace(/\\n/g, '\n')}</span>
    )



    return (
        <Table
            width={1350}
            height={700}
            headerHeight={20}
            rowHeight={30}
            rowCount={logs.length}
            rowGetter={({index})=>logs[index]}
        >

            <Column label="timestamp" dataKey="created_at" width={150}/>
            <Column label="type" dataKey="type" width={100} />
            <Column width={1000} className={style.span_description} label="log" dataKey="description" cellRenderer={(cellData)=> renderLogs(cellData)}/>
        </Table>

    )
}

export default  LogPanel;