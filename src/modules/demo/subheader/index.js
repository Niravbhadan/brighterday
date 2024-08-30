import React from "react";
import "./subheader.scss";
export default function Subheader(){
    return(
        <div className="subheader-color">
            <div className="container">
                <div className="subheader-position">
                    <a href="#overview">Overview</a>
                    <a href="#benefits">Benefit</a>
                    <a href="#features">Features</a>
                    <a href="#whyus">Why Us</a>
                </div>
            </div>
        </div>
    )
}