import React, {useEffect,useState } from "react";
import GeneralNavBar from "../GeneralNavBar/GeneralNavBar";
import {getApplicationList} from "../../apiServices/apiService";
import {useHistory} from "react-router";
import NoAppsYet from "./NoAppsYet/NoAppsYet";
import ApplicationListEntry from "./ApplicationListEntry";
import {element} from "prop-types";
import CreateNewApplicationNav from "./CreateNewApplicationNav/CreateNewApplication"


export default function ApplicationListPage() {

    const [applications, setApplication] = useState(null);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const [searchResult, setSearchResult] = useState(null);


    useEffect(() => {
        async function getData() {
            try {
                const response = await getApplicationList();
                console.log("response here: ", response);
                setApplication(response.data.data);
                setSearchResult(response.data.data);
            } catch (e) {
                history.push("/");
            } finally {
                setLoading(false);
            }

        }

        getData();
    }, {});

    const handleSearch = event => {
        event.preventDefault();

        if(!event.target.value) {
            setSearchResult(applications);
        }
        else {
            setSearchResult(searchFunction(event.target.value));
        }
    }

    const searchFunction = (searchString) => {
       return applications.filter( element =>
           //replace removes all the whitespace
           element.name.toLowerCase().replace(/\s/g,'').includes(searchString.toLowerCase().replace(/\s/g,''))
       )
    }


    return (
        <div>
            <GeneralNavBar/>
            {/*first let's try you don't have any app yet*/}
            {/*{ applications && applications.length === 0 ?  (*/}
            <CreateNewApplicationNav/>
            {!loading ? (

                <div>
                    {applications.length === 0 ?
                        (<NoAppsYet/>):(
                            <>
                            <div>
                                <input type="text" onChange={handleSearch} placeholder="Search for application"/>
                               {
                                   searchResult.map((d)=> <ApplicationListEntry name={d.name} id={d.id} description={d.description} key={d.id}/>)
                               }
                           </div>
                            </>
                        )}
                </div>
            ) : (

                <div style={{color: 'white'}}>
                    Loading....
                </div>)
            }

        </div>
    );


}
