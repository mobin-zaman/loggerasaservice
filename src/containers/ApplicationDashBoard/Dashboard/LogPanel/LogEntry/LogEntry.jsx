import React from 'react';
import style from './style.module.css';


const LogEntry = ({type, description, created_at}) =>  {

    return (
    <div className={style.div_style}>
        <span className={style.span_style}>{created_at}</span>
        <span className={style.span_type}>{type}</span>
        <span className={style.span_style}>{description}</span>
    </div>
    );
}

export default LogEntry;
