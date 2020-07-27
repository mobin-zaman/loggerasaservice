import React from "react";
import Login from "./Login/Login";
import style from "./indexPage.module.css";

export default function indexPage() {
  return (
    <>
      <nav className={style.titlebar}>
        <span className={style.titlebartext}>LOG WITH EASE</span>
      </nav>
      <Login />
    </>
  );
}
