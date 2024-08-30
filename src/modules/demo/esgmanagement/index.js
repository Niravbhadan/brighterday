import React from "react";
import "./esg.scss";
import esg from "../../../assets/images/esg-management.png"
export default function Esg(){
    return(
        <div id="overview" className="esg-color">
            <div className="container">
                <div className="esg-flex">
                    <span>Overview</span>
                    <h2>ESG management made simple</h2>
                    <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet turpis porta,
                        semper mi ut, pretium ipsum. Ut justo neque, varius ac laoreet non, 
                        varius quis arcu. Phasellus auctor semper magna eu semper.</p>
                </div>
                <div className="esg-img">
                    <img src={esg}></img>
                </div>
            </div>
        </div>
    )
}