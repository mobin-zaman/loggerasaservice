import React from "react";
import style from "./general-nav-bar.module.css";


export default function GeneralNavBar() {

    return (
        <div className={style.nav_div}>
            <nav className={style.titlebar}>
                <div className={style.nav_div}>
                <span className={style.titlebartext}>LOG WITH EASE</span>
                <img src="https://i.ibb.co/qMvZ38G/index.png" className={style.avatar_style} />
                </div>

            </nav>

        </div>
    )
}