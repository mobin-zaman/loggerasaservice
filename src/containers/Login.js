import React, {useState} from "react";
import "./Login.css";

export default function Login() {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault(); //this prevents the page from refreshing
    }

    return (
        <div className="container">
            <h1>Login to your account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"><b>Email</b></label>
                <input type = "text" placeholder="Enter email" name="email" required/>
                <label htmlFor="password"><b>Password</b></label>
                <input type = "password" placeholder="Enter password" name="password" required/>

                <button type="submit">Login</button>

                <input type = "checkbox" checked="checked" name="remember"/> <label htmlFor="remember"> Remember me </label>
            </form>
        </div>
    )
}
