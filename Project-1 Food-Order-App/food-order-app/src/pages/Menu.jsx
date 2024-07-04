import React from "react";
import "../Styles/Menu.css";
import {MenuList} from "../Data/MenuList"
import MenuItem from "../pages/MenuItem";


function Menu() {
    return (
        <div className="Menu">
            <div className="Menu-title">
                <h2>Menu Title</h2>
            </div>
            <div className="Menu-items">
                {MenuList.map((item, index) => {
                    return <MenuItem key={index} id={index} name={item.name} image={item.image} price={item.price} />
                })}
            </div>
        </div>)
}

export default Menu;