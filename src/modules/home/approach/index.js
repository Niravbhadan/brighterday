import React from "react";
import "./approach.scss";
import grap from"../../../assets/images/grap.png";
import investor from"../../../assets/images/investors-group.png";
import manager from"../../../assets/images/managers.png";
import progres from"../../../assets/images/progress.png";

import logo1 from"../../../assets/logo/bnp.png";
import logo2 from"../../../assets/logo/mufg.png";
import logo3 from"../../../assets/logo/paypal.png";


export default function Approach(){
    return(
        <div>
            <div className="approach-border">
                <div className="container">
                    <div className="approach-details">
                        <span>Trusted by many</span>
                        <h2> Our approach</h2>
                        <p>Our approach solves key ESG questions to be answered for
                            different players in the investor space</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="approach-card-grid">
                    <div className="approach-card-grid-img">
                        <img src={grap}></img>
                    </div>
                    <div className="approach-card-grid-items">
                        <h3>Are you looking for a low-key, low-touch and low-cost solution for 
                            ESG reporting?</h3>
                        <p>ESGIQ is a market leading platform allowing investors, fund managers
                             and investee companies to conduct efficient best-in-class ESG
                              reviews, based on the proven and award winning methodology 
                              of MJ Hudson's ESG & Sustainability team.</p>
                        <div className="approach-card-grid-button">
                           <button>Lern more</button>
                        </div>
                    </div>
                </div>

                <div className="approach-card-second-grid">
                    <div className="approach-card-second-grid-items">
                        <h3>For Investors</h3>
                        <p>We assess fund managers on their ESG approach and we 
                            screen the underlying portfolio. Investors can view the 
                            consolidated information in our dashboard that allows for
                            a click-through journey to assess individual managers,
                            funds and assets</p>
                        <div className="approach-card-second-grid-logos">
                            <img src={logo2}></img>
                            <img src={logo3}></img>
                            <img src={logo1}></img>
                           
                        </div>
                    </div>
                    <div className="approach-card-second-grid-img">
                        <img src={investor}></img>
                    </div>
                </div>

                <div className="approach-card-third-grid">
                    <div className="approach-card-third-grid-img">
                        <img src={manager}></img>
                    </div>
                    <div className="approach-card-third-grid-items">
                        <h3>For Investors</h3>
                        <p className="approach-card-third-grid-items-text">We perform an in-depth review of the assets in the portfolio
                             to identify opportunities and risks. This process can be
                              engaged or outside-in, dependent on asset type.</p>
                        <p>ESG IQ aggregates data across the portfolio and provides a
                             summary of company performance on ESG themes and an overview
                              of key ESG indicators</p>
                        <div className="approach-card-third-grid-logos">
                            <img src={logo2}></img>
                            <img src={logo3}></img>
                            <img src={logo1}></img>
                        </div>
                    </div>
                </div>

                <div className="approach-card-fourth-grid">
                    <div className="approach-card-fourth-grid-items">
                        <h3>For Investors</h3>
                        <p>We identify ESG risks and opportunities for the specific 
                            industry, we assess the current state and we help company
                             boards drive progress. As needed, our Advisors can create
                              a deep-dive asset-level report including concrete and 
                              tangible improvement projects.</p>
                        <div className="approach-card-fourth-grid-logos">
                            <img src={logo2}></img>
                            <img src={logo3}></img>
                            <img src={logo1}></img>
                        </div>
                    </div>
                    <div className="approach-card-fourth-grid-img">
                        <img src={progres}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}