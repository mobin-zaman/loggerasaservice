import React, {useState} from "react";
import "./Signup.css";
import Login from "../Login/Login";
import ApiService from "../../apiServices/apiService";

export default function Signup() {

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [toggleLogin, setToggleLogin] = useState(false);


    function validateForm() {
        return email.length > 0 && password.length>0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
        {!toggleLogin ? (
            <div className="container">
            <h1> Sign up for a new account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" ><b>Useranme</b></label>
                <input type = "text" placeholder="Enter username" name="username" onChange={e => setUsername(e.target.value)} required/>
                <label htmlFor="email"><b>Email</b></label>
                <input type = "text" placeholder="Enter email" name="email" onChange={e => setEmail(e.target.value)} required/>
                <label htmlFor="password"><b>Password</b></label>
                <input type = "password" placeholder="Enter password" name="password" onChange={e => setPassword(e.target.value)} required/>
                <label htmlFor="confirm_password"><b>Confirm Password</b></label>
                <input type = "password" placeholder="Enter same password again" name="confirm_password" onChange={e=> setConfirmPassword(e.target.value)} required/>
                <button type="submit" disabled={!validateForm()}>Login</button>
            </form>
            <h10> Already have an account? <a style={{cursor: 'pointer'}} onClick={()=> setToggleLogin(true)}>Login here!</a></h10>

        </div>
        ) : <Login/>
        }

        </>
    )
}