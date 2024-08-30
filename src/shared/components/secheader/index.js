import React from "react";
import "./secheader.scss"
export default function Secheader() {
    return (
        <div className="secheader-color">
            <header className="secheader-flex">
                <h3>Brighterday</h3>
                <div className="secheader-items">
                    <a href="/">Home</a>
                    <a>Products</a>
                    <a>Pricing</a>
                    <a>About Us</a>
                    <a>Contact</a>
                </div>
                <div className="secheader-butoon">
                    <button className="secheader-btn-1">Request demo</button>
                    <button className="secheader-btn-2">Log in</button>
                </div>
            </header>
        </div>
    );
}
