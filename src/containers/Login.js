import React, {useState} from "react";

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
        <div>
            <h1>login</h1>
            <form onSubmit={handleSubmit}>
                <input type = "text" placeholder="Enter email" name="email" required/>
                <input type = "password" placeholder="Enter password" name="password" required/>

                <input type = "checkbox" checked="checked" name="remember"> Remember me</input>
            </form>
        </div>
    )
}
