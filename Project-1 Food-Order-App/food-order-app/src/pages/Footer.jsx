import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import "../Styles/Footer.css";


function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-Items">
                <InstagramIcon />
                <InstagramIcon />
                <InstagramIcon />
                <div className="CopyRight-container">
                    <p>copy right</p>
                </div>
            </div>
        </div>)
}


export default Footer;