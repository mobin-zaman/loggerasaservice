import React, {useEffect, useState} from "react";
import GeneralNavBar from "../../GeneralNavBar/GeneralNavBar";
import {getApplicationById} from "../../../apiServices/apiService";
import style from "./style.module.css";

const ApplicationDashBoard = ({match}) => {

    const [application, setApplication] = useState({});

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

    return (
        <>
        <GeneralNavBar/>
        <div className={style.application_name}>
            {application.name}
        </div>
            <div className={style.description}>
                {application.description}
            </div>
            
            </>
    )

}

export default  ApplicationDashBoard;
