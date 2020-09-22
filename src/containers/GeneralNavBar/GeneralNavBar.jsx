import React, {useState} from "react";
import style from "./general-nav-bar.module.css";
import DropDownMenu from "./menu/menu";


export default function GeneralNavBar() {

    const [dropDownOpen, setDropDownOpen] = useState(false);

    return (
        <div className={style.nav_div}>
            <nav className={style.titlebar}>
                <div className={style.nav_div}>
                <span className={style.titlebartext}>LOG WITH EASE</span>
                <img src="https://i.ibb.co/qMvZ38G/index.png" className={style.avatar_style}  alt='user menu' onClick={() => setDropDownOpen(!dropDownOpen)}/>
                    {dropDownOpen ? <DropDownMenu/>: null}
                </div>

            </nav>

        </div>
    )
}
