import { dividerClasses } from "@mui/material";
import React, { useState } from "react";
import "./Styles/Navbar.css";
import RightNavbarItems from "./RightNavbarItems";

function Navbar() {

    const [buttonState, setButtonState] = useState(false);

    const toggleButtonState = () => {
        setButtonState(!buttonState);
    };


    return (
        <div className="Navbar">

            <div className={"left-container"}>
                {!buttonState &&
                    <img src="https://th.bing.com/th?id=OIP.5SvUKNDoIf7U1Yq2mI1EyAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Logo" />
                }
                {buttonState && <RightNavbarItems />}
            </div>

            <div className="right-container">
                
                <div className="hide-on-mobile"> <RightNavbarItems /> </div>
                <div className="right-button">
                    <button onClick={toggleButtonState}>Expand</button>
                </div>
            </div>

        </div>)
}


export default Navbar;