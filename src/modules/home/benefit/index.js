import React from "react";
import "./benefit.scss";
import benefiticon1 from "../../../assets/icon/built.svg"
import benefiticon2 from "../../../assets/icon/design.svg"
import benefiticon3 from "../../../assets/icon/advisory.svg"
import benefiticon4 from "../../../assets/icon/compare.svg"
import benefiticon5 from "../../../assets/icon/share.svg"
import benefiticon6 from "../../../assets/icon/track.svg"
import benefiticon7 from "../../../assets/icon/verfy.svg"
export default function Benefit(){
    return(
        <div className="benefit-color">
            <div className="container">
                <div className="benefit-title">
                    
                    <div className="benefit-title-detail">
                        <p>Why ESG IQ</p>
                        <h2>Key Benefits</h2>
                    </div>
                    <div className="benefit-title-button">
                        <button>Request demo</button>
                    </div>
                </div>
                <div className="benefit-grid">
                    <div className="benefit-grid-card">
                        <div className="benefit-grid-card-img">
                            <img src={benefiticon1}></img>
                        </div>
                        <h3>Pre built workflow</h3>
                        <p>Pre-built workflow to streamline the collection and aggregation of data</p>
                    </div>
                    <div className="benefit-grid-card">
                        <div className="benefit-grid-card-img">
                            <img src={benefiticon2}></img>
                        </div>
                        <h3>Pre-designed templates</h3>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="benefit-grid-card">
                        <div className="benefit-grid-card-img">
                            <img src={benefiticon3}></img>
                        </div>
                        <h3>Access to advisory</h3>
                        <p>Access to MJ Hudson Advisory expertise and ESG frameworks</p>
                    </div>
                    <div className="benefit-grid-card">
                        <div className="benefit-grid-card-img">
                            <img src={benefiticon4}></img>
                        </div>
                        <h3>Compare to benchmarks</h3>
                        <p>Compare against benchmarks, set goals, define projects and track progress</p>
                    </div>
                    <div className="benefit-grid-card">
                        <div className="benefit-grid-card-img">
                            <img src={benefiticon5}></img>
                        </div>
                        <h3>Share output</h3>
                        <p>Visualise ESG performance and share output with stakeholders</p>
                    </div>
                    <div className="benefit-grid-card">
                        <div className="benefit-grid-card-img">
                            <img src={benefiticon6}></img>
                        </div>
                        <h3>Track progress</h3>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="benefit-grid-card">
                        <div className="benefit-grid-card-img">
                            <img src={benefiticon7}></img>
                        </div>
                        <h3>Verify data and mitigate greenwashing</h3>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}