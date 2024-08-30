import React from "react";
import "./herobanner.scss"
export default function Herobanner(){
    return(
        <div className="herobanner-color">
            <div className="container">
                <div className="herobanner-title">
                    <h1>Standardise and streamline ESG assessments</h1>
                    <p>Brighterday enables our Private Market clients to simplify,
                        standardise and streamline ESG assessments of fund managers,
                        portfolios, and underlying assets.</p>
                    <div className="herobanner-button">
                        <button>Request demo</button>
                    </div>
                </div>
                <div className="herobanner-img-div">
                    <div className="herobanner-img"></div>
                </div>
            </div>
            
        </div>
    )
}