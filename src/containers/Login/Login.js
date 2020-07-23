import React, {useState} from "react";
import "./Login.css";
import Signup from "../Signup/Signup";

export default function Login() {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("");

    const [toggleSignUp, setToggleSignUp] = useState(false);


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault(); //this prevents the page from refreshing
    }

    return (
        <>
            {!toggleSignUp  ?(
                <div className="container">
                    <h1>Login to your account</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter email" name="email" required/>
                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter password" name="password" required/>

                        <button type="submit">Login</button>

                        <input type="checkbox" checked="checked" name="remember"/> <label htmlFor="remember"> Remember
                        me </label>
                    </form>
                    <h10> Don't have an account? <a style={{cursor: 'pointer'}} onClick={()=> setToggleSignUp(true)}>Sign up here!</a></h10>

                </div>
            ): <Signup/>
            }
        </>

    )
}
