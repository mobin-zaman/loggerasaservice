import React, {useEffect, useLayoutEffect, useState} from 'react';
import {getAllLogs, getApplicationById, getLatestLogByCount, getLogCount} from "../../../apiServices/apiService";
import ApplicationListEntry from "../ApplicationListEntry";
import LogModal from "./LogPanel/LogEntry/LogModal";
import GeneralNavBar from "../../GeneralNavBar/GeneralNavBar";
import LogPanel from "./LogPanel/LogPanel";

const LogDashBoard = ({match}) => {

    const [application, setApplication ] = useState('');
    const [logs, setLogs] = useState([]);

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
        if(difCount !== 0) {
            const getLogByCount = async (count) => {
                try {
                   const response = await getLatestLogByCount(application.id,count+20);
                   if(response.status === 200) {
                       console.log("latest response: ",response.data.data);

                       //to apped the item infront of an array
                       setLogs(logs=>[...response.data.data,...logs]);
                       console.log("logs.length: ", logs.length);
                   }

                } catch(e) {
                   console.log('get log by count error: ',e);
                }
            }
            getLogByCount(difCount);
    }

    }, [difCount, application.id]);

    return (
        <>
            <GeneralNavBar/>
        <div>
            this is the log dash board of {application.id}
            ====
            <LogPanel logs={logs}/>

        </div>
            </>
    )
}

export default LogDashBoard;