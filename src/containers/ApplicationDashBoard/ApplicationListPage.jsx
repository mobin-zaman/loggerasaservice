import React, {useEffect,useState } from "react";
import GeneralNavBar from "../GeneralNavBar/GeneralNavBar";
import {getApplicationList} from "../../apiServices/apiService";
import {useHistory} from "react-router";
import NoAppsYet from "./NoAppsYet/NoAppsYet";
import ApplicationListEntry from "./ApplicationListEntry";


export default function ApplicationListPage() {

    const [applications, setApplication] = useState(null);
    const [loading, setLoading] = useState(true);
    const history = useHistory();


    useEffect(() => {
        async function getData() {
            try {
                const response = await getApplicationList();
                console.log("response here: ", response);
                setApplication(response.data.data);
            } catch (e) {
                history.push("/");
            } finally {
                setLoading(false);
            }

        }

        getData();
    }, {});


    return (
        <div>
            <GeneralNavBar/>
            {/*first let's try you don't have any app yet*/}
            {/*{ applications && applications.length === 0 ?  (*/}
            {!loading ? (

                <div>
                    {applications.length === 0 ?
                        (<NoAppsYet/>):(
                           <div>
                               {
                                   applications.map((d)=> <ApplicationListEntry name={d.name} id={d.id} description={d.description}/>)
                               }
                           </div>
                        )}
                </div>
            ) : (

                <div>
                    Loading....
                </div>)
            }

        </div>
    );


}