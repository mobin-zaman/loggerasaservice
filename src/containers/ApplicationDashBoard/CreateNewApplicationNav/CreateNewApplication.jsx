import React from 'react';
import style from './style.module.css';
import {useHistory} from "react-router";



const CreateNewApplication = () => {

    const history = useHistory();

    const handleOnClick = event => {
        event.preventDefault();

        history.push('/applications/create');

    }

    return (
    <div className={style.div_style}>
        <span className={style.text_style}>Want to add a new application? </span><br/>
        <button className={style.button_style} onClick={handleOnClick}> Create</button>
    </div>
    )
}

export default CreateNewApplication;