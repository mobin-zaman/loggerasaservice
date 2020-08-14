import React, {useEffect, useState} from 'react';
import {getAllLogs, getApplicationById, getLogCount} from "../../../apiServices/apiService";

const LogDashBoard = ({match}) => {

    const [application, setApplication ] = useState('');
    const [logs, setLogs] = useState('');

    const [logCount, setLogCount] = useState('');
    const [difCount, setDifCount] = useState('');


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
              const response = await getAllLogs(match.params.applicationId);

              if(response.status === 200) {
                  console.log("log list: : :", response.data.data);
                  setLogs(response.data.data);
              }
          } catch (e) {
              console.log("Error: ", e);
          }
       }
       getLogs();
    }, [match.params.applicationId]);

    useEffect(() => {
        async function getCount() {
            try {
                const response = await getLogCount(match.params.applicationId);

                if(response.status === 200) {
                    console.log("log count: : :", response.data.log_count);
                }
            } catch(e){
               console.log("Error: ",e);
            }
        }
        getCount();
    }, [match.params.applicationId])



    return (
        <div>
            this is the log dash board of {application.id}
            these are the logs {logs.toString()}
        </div>
    )
}

export default LogDashBoard;