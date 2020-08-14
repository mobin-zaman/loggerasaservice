import React from "react";
import Login from "./Login/Login.jsx";
import style from "./indexPage.module.css";
import { Redirect } from "react-router-dom";

export default function indexPage() {
  return (
    <>
      {/*{true} ? (*/}
      <>
        <nav className={style.titlebar}>
          <span className={style.titlebartext}>LOG WITH EASE</span>
        </nav>
        <Login />
      </>
      ) : ({/*<Redirect to="/applications" />*/}
      )}
    </>
  );
}
