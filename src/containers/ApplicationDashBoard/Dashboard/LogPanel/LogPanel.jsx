import React from 'react';
import LogEntry from "./LogEntry/LogEntry";
import { Table, Column } from "react-virtualized";
import 'react-virtualized/styles.css'; // only needs to be imported once
import shortid from 'shortid';
// const LogPanel = ({logs}) => {
//    return(
//    <div>
//       {logs.map((d)=> <LogEntry key={shortid.generate()} type={d.type} description={d.description} created_at={d.created_at}/>)}
//    </div>
//    )
// }
const LogPanel = ({logs}) => {
    const listHeight = 1000;
    const rowHeight = 100;
    const rowWidth = 850;


const renderLogs = ({index,key,style}) => (
       <LogEntry key={key} style={style} type={logs[index].type} description={logs[index].description} created_at={logs[index].created_at}/>

)





    return (
        <Table
            width={1350}
            height={800}
            headerHeight={20}
            rowHeight={30}
            rowCount={logs.length}
            rowGetter={({index})=>logs[index]}>
            <Column label="timestamp" dataKey="created_at" width={200}/>
            <Column label="type" dataKey="type" width={100} />
            <Column width={200} label="log" dataKey="description"/>
        </Table>

    )
}

export default  LogPanel;