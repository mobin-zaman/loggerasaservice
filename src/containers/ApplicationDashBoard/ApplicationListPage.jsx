import React, {useEffect, useState} from "react";
import GeneralNavBar from "../GeneralNavBar/GeneralNavBar";
import {getAppicationList} from "../../apiServices/apiService";
import {useHistory} from "react-router";
import NoAppsYet from "./NoAppsYet/NoAppsYet";


export default function ApplicationListPage() {

    const [applications, setApplication] = useState(null);
    const history = useHistory();

    useEffect(()=>{
        async function getData(){
            try {
            const response = await getAppicationList();
            console.log("response here: ",response);
            setApplication(response.data);
            } catch(e) {
               history.push("/");
            }
        }
        getData();
        }, []);


  return (
      <div>
          <GeneralNavBar/>
          {/*first let's try you don't have any app yet*/}
          <NoAppsYet/>
      </div>

  );

}
