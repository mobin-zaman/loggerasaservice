
import React from "react";
import {useHistory} from "react-router";

const ApplicationListEntry = ({id,name,description}) => {

    const history = useHistory();
    const handleRedirectToDashboard = event => {
       history.push(`/applications/dashboard/${id}`)
    }

   return (
       <>
       <div onClick={handleRedirectToDashboard} >{name}</div>
       <div>{description}</div>
       </>
   )
}

export  default ApplicationListEntry;