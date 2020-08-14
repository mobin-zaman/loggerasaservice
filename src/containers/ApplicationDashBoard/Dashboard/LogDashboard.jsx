import React, {useEffect, useState} from 'react';
import {getAllLogs, getApplicationById} from "../../../apiServices/apiService";

const LogDashBoard = ({match}) => {

    const [application, setApplication ] = useState('');
    const [logs, setLogs] = useState('');

    const [logCount, setLogCount] = useState('');


    useEffect(() => {
        //to get application info in initial page loading
        async function getApplication() {
            try{
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

    useEffect(() => {
        //to get initial log list
       async function getLogs(){
          try{
              const response = await getAllLogs(application.id);

              if(response.status === 200) {
                  console.log("log list: : :", response.data.data);
                  setLogs(response.data.data);
              }
          } catch (e) {
              console.log("Error: ", e);
          }
       }
       getLogs();
    }, [application]);



    return (
        <div>
            this is the log dash board of {application.id}
        </div>
    )
}

export default LogDashBoard;