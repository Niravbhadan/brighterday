import React from "react";
import "./feture.scss";
import control from "../../../assets/images/control.png";
import esgper from "../../../assets/images/esg-perfomance.png";
import esgrat from "../../../assets/images/esg-rating.png";
import oursol from "../../../assets/images/our-solutions.png";
export default function Feture(){
    return(
        <div id="features" className="container">
            <div className="feture-title">
                <span>lorem ipsum</span>
                <h2>Features</h2>
                <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet turpis porta, 
                    semper mi ut, pretium ipsum. Ut justo neque, varius ac laoreet non, 
                    varius quis arcu.</p>
            </div>
            <div className="feture-grid">
                <div className="feture-grid-details">
                    <h2>Assessment control</h2>
                    <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet turpis porta, 
                        semper mi ut, pretium ipsum. Ut justo neque, varius ac laoreet non, 
                        varius quis arcu. Phasellus auctor semper magna eu semper.</p>
                </div>
                <div className="feture-grid-img">
                    <img src={control}></img>
                </div>
            </div>
            <div className="feture-grid">
                <div className="feture-grid-img">
                    <img src={esgrat}></img>
                </div>
                <div className="feture-grid-details">
                    <h2>ESG Ratings</h2>
                    <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet turpis porta, 
                        semper mi ut, pretium ipsum. Ut justo neque, varius ac laoreet non, 
                        varius quis arcu. Phasellus auctor semper magna eu semper.</p>
                </div>
            </div>
            <div className="feture-grid feture-grid-details-border">
                <div className="feture-grid-details ">
                    <h2>ESG Performance</h2>
                    <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet turpis porta, 
                        semper mi ut, pretium ipsum. Ut justo neque, varius ac laoreet non, 
                        varius quis arcu. Phasellus auctor semper magna eu semper.</p>
                </div>
                <div className="feture-grid-img">
                    <img src={esgper}></img>
                </div>
            </div>
            <div className="feture-grid-two">
                <div className="feture-grid-img">
                    <img src={oursol}></img>
                </div>
                <div id="whyus" className="feture-grid-details-two">
                    <span>Why us</span>
                    <h2>Our Solution</h2>
                    <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet turpis porta, 
                        semper mi ut, pretium ipsum. Ut justo neque, varius ac laoreet non, 
                        varius quis arcu.</p>
                    <div className="feture-details-flex">
                        <div className="feture-details-flex-items">
                            <span>✓</span>
                            <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet</p>
                        </div>
                        <div className="feture-details-flex-items">
                            <span>✓</span>
                            <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet</p>
                        </div>
                        <div className="feture-details-flex-items">
                            <span>✓</span>
                            <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}