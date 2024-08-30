import React from "react";
import "./investor.scss";
import investorimg from "../../../assets/images/demoimg1.png";
export default function Investor(){
    return(
        <div className="investor-color">
            <div className="investor-grid container">
                <div className="investor-grid-title">
                    <span>Investors</span>
                    <h1>IQ for Investors</h1>
                    <p>Mauris vitae congue sem. Etiam convallis et turpis sit 
                        amet hendrerit. Proin sed massa eros. Vivamus vitae nibh
                        lectus. Maecenas sit amet ipsum diam. Morbi at tempor ligula.</p>
                    <div className="investor-btn">
                        <button className="investor-btn-one">Get started</button>
                        <button className="investor-btn-two">Request Demo</button>
                    </div>
                </div>
                <div className="investor-grid-img">
                    <img src={investorimg}></img>
                </div>

            </div>
           
        </div>
    )
}