import React from "react";
import "./footer.scss";
import logo1 from "../../../assets/logo/twitter.svg"
import logo2 from "../../../assets/logo/linkdin.svg"
export default function Footer(){
    return(
        <div className="footer-color">
            <div className="container">
                <footer className="footer-grid">
                    <div className="footer-title">
                        <h2>Brighterday</h2>
                        <div className="footer-img-logo">
                            <div className="footer-logo"><img src={logo1}></img></div>
                            <div className="footer-logo"><img src={logo2}></img></div>
                        </div>
                    </div>
                    <div className="footer-grid-second">
                        <div className="footer-grid-two">
                            <h6>ESGIQ</h6>
                            <p>Abouth</p>
                            <p>Feture</p>
                            <p>Pricing</p>
                            <p>Feedback</p>
                        </div>
                        <div className="footer-grid-two">
                            <h6>Company</h6>
                            <p>About Us</p>
                            <p>Abouth</p>
                        </div>
                        <div className="footer-grid-input">
                            <h6>Request a demo to try the product</h6>
                            <div className="footer-grid-input-items">
                                <input type="E-mail" placeholder="E-mail"></input>
                                <div className="footer-btn">
                                    <button>Request Demo</button>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium</p>
                        </div>
                    </div>

                </footer>
                    <div className="footer-span">
                        <span>Brighterday © 2021</span>
                    </div>
            </div>
        </div>
    )

}