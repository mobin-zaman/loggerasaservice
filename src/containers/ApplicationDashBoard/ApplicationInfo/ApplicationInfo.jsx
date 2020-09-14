import React, {useEffect, useState} from "react";
import GeneralNavBar from "../../GeneralNavBar/GeneralNavBar";
import {getApplicationById} from "../../../apiServices/apiService";
import {useHistory} from "react-router";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ClipboardIcon from "react-clipboard-icon";
import  {Prism as SyntaxHighlighter}  from 'react-syntax-highlighter';
import { atomDark as highlightStyle} from 'react-syntax-highlighter/dist/esm/styles/prism';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from "./style.module.css";

const ApplicationInfo = ({match}) => {

    const [application, setApplication] = useState({});
    const [exampleCode, setExampleCode] = useState(`
    //include the module
    const Logger = require('logwithease');
    
    //this is an example key
    const apiKey = "v4McareBlcds2b-rWABNoy9Xds3p-tUfytlsWU70CVYdnKE5";
    
    //the logger class needs to be instanciated
    const logger = new Logger(apiKey);
    
    //info type log
    logger.info("example information");

    //warning type log
    logger.warn(\`giving you warning\`);

    //error type log
    logger.error("error: ", exampleException);

    //custom type of log, first parameter is the custom log type
    
    logger.log("NOTE", "this is an example of custom type log");

    `);
    const history = useHistory();
    const [copied, setCopied] = useState(true);

    const notify = (text) => {
        setCopied(true);
        toast.dark(text);
    };

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

    const transitToStatPage = event => {
        history.push(`/applications/stats/${match.params.applicationId.toString()}`);
    }

    return (
        <>
        <GeneralNavBar/>
        <div className={style.application_name}>
            {application.name}
        </div>

            <button className={style.check_logs_button} onClick={transitToLogPage}>Check Logs!</button>
            <button className={style.check_logs_button} onClick={transitToStatPage}> Check Log Stats!</button>

            <div className={style.description}>
                {application.description}
            </div>
            <div className={style.code_entry_style}>
                api key: <span className={style.code_style}><code>{application.api_key}</code></span>
                <span>
                    <CopyToClipboard text={application.api_key} onCopy={() => notify("api key copied to clipboard")}>
                    <ClipboardIcon size={30}/>
                    </CopyToClipboard>
                </span>
            </div>
            <div>
            <div className={style.code_entry_style}>To add the logger client to you project simply run:</div>
                <div className={style.code_entry_style}>
                <span>for npm </span>
                <span className={style.code_style}><code>npm i logwithease </code></span>
                    <CopyToClipboard text={"npm i logwitease"} onCopy={() => notify("npm command copied to clipboard")}>
                    <span>   <ClipboardIcon size={40} /></span>
                    </CopyToClipboard>
                </div>
                <div className={style.code_entry_style}>
                <span>for yarn</span>
                <span className={style.code_style}><code>yarn add logwithease</code></span>
                    <CopyToClipboard text={"yarn add logwithease"} onCopy={() => notify("yarn command copied to clipboard")}>
                    <span>   <ClipboardIcon size={40} /></span>
                    </CopyToClipboard>
                </div>
                <div>
                    <div className={style.code_entry_style}> example usage</div>
                    <div className={style.code_style}><SyntaxHighlighter language="javascript" style={highlightStyle} >{exampleCode}</SyntaxHighlighter></div>
                </div>
                {/*<div className={style.toast_notification}>*/}
            </div>

            <span>
            {copied ? <ToastContainer position="bottom-right"/>: null}
            </span>
           </>
    )

}

export default  ApplicationInfo;
