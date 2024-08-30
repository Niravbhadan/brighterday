import React from "react";
import "./indicator.scss";

export default function Indicator(){
    return(
        <div>
            <div className="container">
                <div className="indicator-title">
                    <h3>ESG Indicators</h3>
                    <p>Our cutting edge digital platform helps identify relevant metrics,
                        streamline data collection, analyse performance and track progress,
                        all in one place, across the entire portfolio.</p>
                </div>
                <div className="indicator-grid">
                    <div className="indicator-grid-title">
                        <div className="indicator-grid-title-details-one">
                            <div className="indicator-grid-title-details-color"></div>
                            <a>Environmental</a>
                        </div>
                        <div className="indicator-grid-title-details-two">
                            <div className="indicator-grid-title-details-color"></div>
                            <a>Social</a>
                        </div>
                        <div className="indicator-grid-title-details-three">
                            <div className="indicator-grid-title-details-color"></div>
                            <a>Governance</a>
                        </div>
                    </div>
                    <div className="indicator-grid-items">
                        <div className="indicator-grid-items-detsils">
                            <p>Total electricity consumption (MWh)</p>
                        </div>
                        <div className="indicator-grid-items-detsils">
                            <p>Total gas consumption (m3)</p>
                        </div>
                        <div className="indicator-grid-items-detsils">
                            <p>Percentage certified renewable energy (%)</p>
                        </div>
                        <div className="indicator-grid-items-detsils">
                            <p>Carbon footprint Scope I, II and III (tCO2eq)</p>
                        </div>
                        <div className="indicator-grid-items-detsils">
                            <p>Emissions to water (Tonnes)</p>
                        </div>
                        <div className="indicator-grid-items-detsils">
                            <p>Hazardous waste (Tonnes)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="indicator-img">
                <h2>Our team of ESG experts can help you be on the right side of tomorrow.</h2>
            </div>
        </div>
    )
}