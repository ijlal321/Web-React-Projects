import React from "react";
import "../Styles/MenuItem.css";


function MenuItem(props) {
    return (
        <div className="Card">
        
            <img src={props.image}/>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
        )
}

export default MenuItem;