import React from 'react';
import './style.module.css';


const LogEntry = ({type, description, created_at}) =>  {
    return (
    <div className="row m-4">
        <div className="col-3 justify-content-center">{created_at}</div>
        <div className="col-1 nopadding" >{type}</div>
        <div className="col-8">{description}</div>
    </div>
    )
}

export default LogEntry;
