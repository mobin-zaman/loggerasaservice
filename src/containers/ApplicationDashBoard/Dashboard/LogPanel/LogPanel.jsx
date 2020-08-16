import React from 'react';
import LogEntry from "./LogEntry/LogEntry";
import shortid from 'shortid';

const LogPanel = ({logs}) => {
   return(
   <div>
      {logs.map((d)=> <LogEntry key={shortid.generate()} type={d.type} description={d.description} created_at={d.created_at}/>)}
   </div>
   )
}

export default  LogPanel;