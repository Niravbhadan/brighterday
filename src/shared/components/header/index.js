import React from "react";
import "./header.scss"
export default function Header(){
    return(
        <div className="header-color">
            <header className="header-flex">
                <h3>Brighterday</h3>
                <div className="header-items">
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a>Pricing</a>
                    <a>About Us</a>
                    <a>Contact</a>
                </div>
                <div className="header-butoon">
                    <button className="header-btn-1">Request demo</button>
                    <button className="header-btn-2">Log in</button>
                </div>  
            </header>
        </div>
    )
}