import React, {useEffect, useLayoutEffect, useState} from 'react';
import {getAllLogs, getApplicationById, getLogCount} from "../../../apiServices/apiService";

const LogDashBoard = ({match}) => {

    const [application, setApplication ] = useState('');
    const [logs, setLogs] = useState('');

    const [logCount, setLogCount] = useState('');
    const [difCount, setDifCount] = useState(0);
    const [currentCount, setCurrentCount] = useState(0);


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

        async function getCount() {
            try {
                const response = await getLogCount(match.params.applicationId);

                if(response.status === 200) {
                    console.log("log count: : :", response.data.log_count);
                    setLogCount(response.data.log_count);
                    setCurrentCount(response.data.log_count);
                }
            } catch(e){
               console.log("Error: ",e);
            }
        }
        getApplication();
        getCount();
        getLogs();
    }, [])



    useEffect(() => {
        const interval = setInterval(async() => {
            try {
                const response = await getLogCount(match.params.applicationId);
                console.log("response from update count: ", response.data.log_count);
                setCurrentCount(response.data.log_count);
                console.log("seeing currentCount-logCount", currentCount-logCount);
                setDifCount(currentCount-logCount);
                setLogCount(currentCount);
            } catch (e) {
                console.log("ERROR: ",e);
            }
        }, 1000);
        return () => clearInterval(interval);
    });


    useEffect(() => {
        if(difCount !== 0) console.log("it will run when world is changed");

    }, [difCount]);

    return (
        <div>
            this is the log dash board of {application.id}
            these are the logs {logs.toString()}
        </div>
    )
}

export default LogDashBoard;