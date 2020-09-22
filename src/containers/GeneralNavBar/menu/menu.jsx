import React, { useState } from "react";
import style from "./style.module.css"
import {useHistory} from "react-router";
import {LogOut} from "../../../apiServices/Auth/authenticatedChecker";

const DropDownMenu = () => {

    const [showMenu, setShowMenu] = useState(true);
    const history = useHistory();

    const navigateToApplicationPage = () => {
        history.push("/applications");
    }

    const logOut = () => {
        LogOut();
        history.push("/");
    }


    return (
        <div>

            {
                showMenu
                    ? (
                        <div className={style.div_border}>
                            <button className={style.navigation_button} onClick={navigateToApplicationPage}> Applications </button>
                            <button className={style.navigation_button} onClick={logOut}> Log Out</button>
                        </div>
                    )
                    : null
            }
        </div>
    )
}

export default DropDownMenu;
