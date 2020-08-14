import React, {useEffect, useState} from "react";
import GeneralNavBar from "../../GeneralNavBar/GeneralNavBar";
import {getApplicationById} from "../../../apiServices/apiService";
import style from "./style.module.css";
import {useHistory} from "react-router";

const ApplicationInfo = ({match}) => {

    const [application, setApplication] = useState({});
    const history = useHistory();

    useEffect(() => {
        async function getApplication() {
           try{
               console.log("applicationId: ", match.params.applicationId);
               const response = await getApplicationById(match.params.applicationId);

               if(response.status === 200){
                   console.log("response: : :", response.data.data);
                   setApplication(response.data.data);
                   console.log("Application: ", application);
                   console.log("response: : :", response.data.data);
               }


           }  catch(e) {
               console.log("Error: ", e);
           }
        }
        getApplication();
    },[match.params.applicationId]);

    const transitToLogPage = event => {
       history.push(`/applications/logs/${match.params.applicationId.toString()}`);
    }

    return (
        <>
        <GeneralNavBar/>
        <div className={style.application_name}>
            {application.name}
        </div>
            <div className={style.description}>
                {application.description}
            </div>
            <div>
              the api key  {application.api_key}
            </div>

            <button onClick={transitToLogPage}>Check Logs!</button>
            </>
    )

}

export default  ApplicationInfo;
