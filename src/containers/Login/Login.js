import React, { useState } from "react";
import "./Login.css";
import Signup from "../Signup/Signup";
import { login } from "../../apiServices/apiService";

export default function Login({ signUpSuccess }) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [toggleSignUp, setToggleSignUp] = useState(false);

  const [errors, setErrors] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault(); //this prevents the page from refreshing

    setErrors(null);

    try {
      const response = await login(email, password);
      console.log("response from login: ", response);
    } catch (e) {
      console.log("error from login: ", e.response);
      if(e.response.status===422) {
          setErrors({
              email: e.response.data.email[0]
          });
      }

      if(e.response.status===401) {
          setErrors({
              credentialError: 'email or password is wrong, please check the credentials'
          })
      }
    }
  }

  return (
    <>
      {!toggleSignUp ? (
        <div className="container">
          {signUpSuccess && <h4>{signUpSuccess}</h4>}
          <h1>Login to your account</h1>

          {errors && errors.credentialError && (
              <div className="error"> {errors.credentialError}</div>
            )}



          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors && errors.email && (
              <div className="error"> {errors.email}</div>
            )}

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>

            {/* TODO: work with it later on 
                        <input type="checkbox" checked="checked" name="remember"/> <label htmlFor="remember"> Remember
                        me </label> */}
          </form>
          <button className="href" onClick={() => setToggleSignUp(true)}>
            Don't have an account? <b color="blue">Sign up here!</b>
          </button>
        </div>
      ) : (
        <Signup />
      )}
    </>
  );
}
