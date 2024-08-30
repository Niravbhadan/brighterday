import React from "react";
import "./benefitbenner.scss";
import benefitbennerlogo1 from "../../../assets/logo/mufg.png";
import benefitbennerlogo2 from "../../../assets/logo/paypal.png";
import benefitbennerlogo3 from "../../../assets/logo/bnp.png";
export default function Benefitbenner(){
    return(
        <div id="benefits">
            <div className="benefitbenner-color">
                <div className="container">
                    <div className="benefitbenner-details">
                        <span>Key Benefits</span>
                        <h2>Nullam hendrerit, lorem non sollicitudin elementum, velit enim.</h2>
                        <div className="benefitbenner-details-flex">
                            <div className="benefitbenner-details-flex-items">
                                <span>✓</span>
                                <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet</p>
                            </div>
                            <div className="benefitbenner-details-flex-items">
                                <span>✓</span>
                                <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet</p>
                            </div>
                            <div className="benefitbenner-details-flex-items">
                                <span>✓</span>
                                <p>Proin fringilla ornare nulla a faucibus. Nunc sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
           <div className="container">
                <div className="benefitbenner-logo ">
                     <img src={benefitbennerlogo1}></img>
                     <img src={benefitbennerlogo2}></img>
                     <img src={benefitbennerlogo3}></img>
                     <img src={benefitbennerlogo1}></img>
                 </div>
           </div>
        </div>
    )
}