import React, { useState } from "react";
import { Link } from "react-router-dom";

function RightNavbarItems(props) {
    return (
        <div className={`Nav-Bar-Linkers ${props.extraClasses}`}>
            <Link to="/home">Menu1</Link>
            <Link to="/menu">Menu2</Link>
            <Link to="/about">Menu3</Link>
            <Link to="/contact">Menu4</Link>
        </div>
    )
}
export default RightNavbarItems;