import React from "react";
import Login from "./Login/Login.jsx";
import style from "./indexPage.module.css";
import { authenticated } from "../../apiServices/Auth/authenticatedChecker";
import { Redirect } from "react-router-dom";

export default function indexPage() {
  return (
    <>
      {!authenticated() ? (
        <>
          <nav className={style.titlebar}>
            <span className={style.titlebartext}>LOG WITH EASE</span>
          </nav>
          <Login />
        </>
      ) : (
        <Redirect to="/applications" />
      )}
    </>
  );
}
