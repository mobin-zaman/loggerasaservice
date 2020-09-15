import React, {useState} from "react";
import GeneralNavBar from "../../GeneralNavBar/GeneralNavBar";
import {addApplication} from "../../../apiServices/apiService";
import {useHistory} from "react-router";
import style from "./style.module.css";

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

                <h1 className={style.create_app_form_header}> Create New App</h1>


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
                        placeholder="Enter description of the application"
                        name="description"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button className={style.application_submit_button} type="submit" disabled={submittedDisabled}>Create</button>

                </form>
            </div>
            )
       </div>
            </>
    )
}

export default CreateApplicationFrom;
