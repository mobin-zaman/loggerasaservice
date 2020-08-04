import React, {useEffect, useState} from "react";
import GeneralNavBar from "../GeneralNavBar/GeneralNavBar";
import {getAppicationList} from "../../apiServices/apiService";
import {useHistory} from "react-router";
export default function ApplicationDashBoard() {

    const [applications, setApplication] = useState(null);
    const history = useHistory();

    useEffect(()=>{
        async function getData(){
            try {
            const response = await getAppicationList();
            } catch(e) {
               history.push("/");
            }
        }
        getData();
        }, []);


  return (
      <div>
          <GeneralNavBar/>

      </div>
  );
}
