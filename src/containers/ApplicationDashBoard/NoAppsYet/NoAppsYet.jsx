import React from 'react';
import style from './noaapyet.module.css';
import CreateApplicationForm from '../CreateApplicationForm/CreateApplicationForm';
import {useHistory} from "react-router";
 const NoAppsYet = () => {
     const history = useHistory()

     const redirectToCreateApplicationForm = () => {
        history.push('/applications/create')
     }

     return(
    <div className={style.container}>

        You don't have any applications yet
        <button className={style.button} onClick={redirectToCreateApplicationForm}> Create new application</button>
    </div>
 )
     }

export default NoAppsYet;
