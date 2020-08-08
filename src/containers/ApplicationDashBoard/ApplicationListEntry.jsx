
import React from "react";
import {useHistory} from "react-router";
import style from "./applicationListEntry.module.css";

const ApplicationListEntry = ({id,name,description}) => {

    const history = useHistory();
    const handleRedirectToDashboard = event => {
       history.push(`/applications/dashboard/${id}`)
    }

   return (
       <>
       <div onClick={handleRedirectToDashboard}  className={style.name_div}>{name}</div>
       <div className={style.description_div}>{description}</div>
           <hr/>
           </>
   )
}

export  default ApplicationListEntry;