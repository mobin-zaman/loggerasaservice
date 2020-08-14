import React, {useState} from "react";
import style from "../../IndexPages/Login/Login.module.css";
import GeneralNavBar from "../../GeneralNavBar/GeneralNavBar";
import {addApplication} from "../../../apiServices/apiService";
import ApplicationInfo from "../ApplicationInfo/ApplicationInfo";
import {useHistory} from "react-router";

const CreateApplicationFrom = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState(null);
    const [submittedDisabled, setSubmittedDisabled] = useState(false);
    const history = useHistory();

    const handleSubmit = async( event ) => {
        event.preventDefault();

        setSubmittedDisabled(true);

        console.log("Submit clicked");
        
        try {
           const response = await addApplication(name, description);

           if(response.status === 201) {
               console.log("Data: ", response.data);
               history.push(`/applications/dashboard/${response.data.data.id}`)
           }

        } catch (e) {
           console.log("Error: ",e);
           if(e.response.status === 409) {
                setErrors({
                    name: "You already have an application by this name"
                })
           }
        }
        finally {
            setSubmittedDisabled(false);
        }
    }

    return(
        <>
        <GeneralNavBar/>
        <div>
            <div className={style.container}>

                <h1> Create New App</h1>


                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <b>Application Name</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter name of the application"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    {errors && errors.name && (
                        <div className="error"> {errors.name}</div>
                    )}


                    <label htmlFor="description">
                        <b>Description </b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter description of the application (optional)"
                        name="description"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button type="submit" disabled={submittedDisabled}>Create</button>

                </form>
            </div>
            )
       </div>
            </>
    )
}

export default CreateApplicationFrom;