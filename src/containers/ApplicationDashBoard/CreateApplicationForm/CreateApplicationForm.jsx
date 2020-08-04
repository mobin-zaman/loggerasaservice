import React, {useState} from "react";
import style from "../../IndexPages/Login/Login.module.css";
import GeneralNavBar from "../../GeneralNavBar/GeneralNavBar";
import {addApplication} from "../../../apiServices/apiService";
import ApplicationDashBoard from "../ApplicationDashBoard/ApplicationDashBoard";

const CreateApplicationFrom = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async( event ) => {
        event.preventDefault();
        console.log("Submit clicked");
        
        try {
           const response = await addApplication(name, description);

           if(response.status === 201) {
               console.log("Hoia gese");
               console.log("Data: ", response.data);

               <ApplicationDashBoard name={name} />
           }

        } catch (e) {
           console.log("Error: ",e);
           alert("something went wrong");
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

                    <label htmlFor="description">
                        <b>Description </b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter description of the application (optional)"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button type="submit">Login</button>

                </form>
                <button className={style.href} onClick={() => {}}>
                    Don't have an account? <b color="blue">Sign up here!</b>
                </button>
            </div>
            )
       </div>
            </>
    )
}

export default CreateApplicationFrom;