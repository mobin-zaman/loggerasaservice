import React, {useState} from "react";
import "./Signup.css";
import Login from "../Login/Login";
import {signUp as apiSignUp} from "../../apiServices/apiService";

export default function Signup() {

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState(null);

    const [toggleLogin, setToggleLogin] = useState(false);






    function validatePasswords() {
       if (password !== confirmPassword) {
           setErrors({
               password: 'passwords do not match',
               confirmPassword: 'passwords do not match'
           })
       }
    }

    function handleSubmit(event) {
        event.preventDefault();

        validatePasswords();

        apiSignUp(username, email, password);


    }

    return (
        <>
        {!toggleLogin ? (
            <div className="container">
            <h1> Sign up for a new account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" ><b>Useranme</b></label>
                <input type = "text" placeholder="Enter username" name="username" onChange={e => setUsername(e.target.value)} required/>
                {errors && errors.username && (
                    <div className="error"> {errors.username}</div>
                )}

                <label htmlFor="email"><b>Email</b></label>
                <input type = "text" placeholder="Enter email" name="email"
                       onChange={e => {setEmail(e.target.value);}}
                       required/>
                {errors && errors.email && (
                    <div className="error"> {errors.password}</div>
                )}

                <label htmlFor="password"><b>Password</b></label>
                <input type = "password" placeholder="Enter password" name="password" onChange={e => {setPassword(e.target.value);console.log("clicked")}} required/>
                {errors && errors.password && (
                   <div className="error"> {errors.password}</div>
                )}

                <label htmlFor="confirm_password"><b>Confirm Password</b></label>
                <input type = "password" placeholder="Enter same password again" name="confirm_password" onChange={e=> setConfirmPassword(e.target.value)} required/>
                {errors && errors.password && (
                    <div className="error"> {errors.password}</div>
                )}

                <button type="submit">Sign Up</button>
            </form>
                <button className="href" onClick={()=> setToggleLogin(true)}>Already have an account? <b color="blue">Login here!</b></button>


        </div>
        ) : <Login/>
        }

        </>
    )
}