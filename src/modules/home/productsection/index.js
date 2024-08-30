import React from "react";
import "./product.scss";
import icon1 from "../../../assets/icon/bag.png"
import icon2 from "../../../assets/icon/chart.png"
import icon3 from "../../../assets/icon/line-grap.png"
import icon4 from "../../../assets/icon/star-round.png"
import icon5 from "../../../assets/icon/sfdr.png"
import icon6 from "../../../assets/icon/carbon.png"
export default function Productsection(){
    return(
        <div className="product-color">
            <div className="container">
                <div className="product-title">
                    <h2>Our Products</h2>
                </div>
                <div className="product-grid">
                     <div className="product-grid-items">
                            <div className="product-grid-items-img">
                                <img src={icon1}></img>
                            </div>
                            <div className="product-grid-items-details">
                                <h6>IQ for Investors</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                     sed do eiusmod tempor incididunt ut labore et dolore 
                                     magna aliqua.</p>
                                <a>Learn More</a>
                            </div>
                     </div>
                     <div className="product-grid-items">
                            <div className="product-grid-items-img">
                                <img src={icon2}></img>
                            </div>
                            <div className="product-grid-items-details">
                                <h6>IQ for Investors</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                     sed do eiusmod tempor incididunt ut labore et dolore 
                                     magna aliqua.</p>
                                <a>Learn More</a>
                            </div>
                     </div>
                     <div className="product-grid-items">
                            <div className="product-grid-items-img">
                                <img src={icon3}></img>
                            </div>
                            <div className="product-grid-items-details">
                                <h6>IQ for Investors</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                     sed do eiusmod tempor incididunt ut labore et dolore 
                                     magna aliqua.</p>
                                <a>Learn More</a>
                            </div>
                     </div>
                     <div className="product-grid-items">
                            <div className="product-grid-items-img">
                                <img src={icon4}></img>
                            </div>
                            <div className="product-grid-items-details">
                                <h6>EU Taxonomy Module</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                     sed do eiusmod tempor incididunt ut labore et dolore 
                                     magna aliqua.</p>
                                <a>Learn More</a>
                            </div>
                     </div>
                     <div className="product-grid-items">
                            <div className="product-grid-items-img">
                                <img src={icon5}></img>
                            </div>
                            <div className="product-grid-items-details">
                                <h6>SFDR Module</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                     sed do eiusmod tempor incididunt ut labore et dolore 
                                     magna aliqua.</p>
                                <a>Learn More</a>
                            </div>
                     </div>
                     <div className="product-grid-items">
                            <div className="product-grid-items-img">
                                <img src={icon6}></img>
                            </div>
                            <div className="product-grid-items-details">
                                <h6>Carbon Footprint Module</h6>
                                <p>Production of a Taxonomy-alignment assessment, resulting
                                    in a percentage for the fund, which is a key disclosure
                                    requirement for Art 8/9 products.</p>
                                <a>Learn More</a>
                            </div>
                     </div>
                </div>
            </div>
        </div>
    )
}