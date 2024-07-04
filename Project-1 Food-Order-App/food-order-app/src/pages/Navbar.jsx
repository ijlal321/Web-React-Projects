import { dividerClasses } from "@mui/material";
import React, { useState } from "react";
import "../Styles/Navbar.css";
import RightNavbarItems from "./RightNavbarItems";


function Navbar() {

    const [buttonState, setButtonState] = useState(false);

    const toggleButtonState = () => {
        setButtonState(!buttonState);
    };

    function LogoImage(props) {
        return (<img className={props.extraClasses} src="https://th.bing.com/th?id=OIP.5SvUKNDoIf7U1Yq2mI1EyAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Logo" />
        )
    }


    return (
        <div className="Navbar">

                <div className={"left-container"}>
                    <LogoImage extraClasses="hide-on-mobile"/>
                    {buttonState &&
                        <LogoImage extraClasses="hide-on-large-screen"/>
                    }
                    {!buttonState &&
                    <RightNavbarItems extraClasses="hide-on-large-screen"/>
                    }
                                                    
                </div>

                <div className="right-container">
                    <button className="right-button hide-on-large-screen" onClick={toggleButtonState}>Expand</button>
                    <RightNavbarItems extraClasses="hide-on-mobile"/>
                </div>

            {/* <div className="on-mobile">
                <div className={"left-container"}>
                    {!buttonState &&
                        <LogoImage />
                    }
                    {buttonState && <RightNavbarItems />}
                </div>

                <div className="right-container">
                    <button className="right-button" onClick={toggleButtonState}>Expand</button>
                </div>
            </div>


            <div className="on-large-screen">
                <div className={"left-container"}>
                    <LogoImage />
                </div>

                <div className="right-container">
                    <RightNavbarItems />
                </div>
            </div> */}

        </div>)
}


export default Navbar;