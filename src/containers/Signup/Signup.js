import React, { useState } from "react";
import "./Signup.css";
import Login from "../Login/Login";
import { signUp as apiSignUp } from "../../apiServices/apiService";

export default function Signup() {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState(null);

  const [toggleLogin, setToggleLogin] = useState(false);

  const [signUpSuccess, setSignUpSuccess] = useState("");

  function validatePasswords() {
    if (password !== confirmPassword) {
      setErrors({
        password: "passwords do not match",
        confirmPassword: "passwords do not match",
      });
      return false;
    } else {
      setErrors(null);
      return true;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (validatePasswords()) {
      try {
        const response = await apiSignUp(username, email, password);

        console.log("response: ", response.status);

        if (response.status === 201) {
          setSignUpSuccess(
            "Account creation successful, you can proceed to login"
          );
          setToggleLogin(true);
        }
      } catch (e) {
        console.log("ERROR: ", e.response.data.email[0]);

        const { data } = e.response;

        if (data.email) {
          setErrors({
            email: data.email[0],
          });
        }
      }
    }
  }

  return (
    <>
      {!toggleLogin ? (
        <div className="container">
          <h1> Sign up for a new account</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              <b>Useranme</b>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors && errors.username && (
              <div className="error"> {errors.username}</div>
            )}

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
                console.log("clicked");
              }}
              required
            />
            {errors && errors.password && (
              <div className="error"> {errors.password}</div>
            )}

            <label htmlFor="confirm_password">
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter same password again"
              name="confirm_password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors && errors.confirmPassword && (
              <div className="error"> {errors.confirmPassword}</div>
            )}

            <button type="submit">Sign Up</button>
          </form>
          <button className="href" onClick={() => setToggleLogin(true)}>
            Already have an account? <b color="blue">Login here!</b>
          </button>
        </div>
      ) : (
        <Login signUpSuccess={signUpSuccess} />
      )}
    </>
  );
}
