import React from "react";
import Subheader from "./subheader";
import Investor from "./investorsection";
import Esg from "./esgmanagement";
import Benefitbenner from "./benefit-banner";
import Feture from "./feture";
import Aliquam from "./Aliquam";
import Footer from "../../shared/components/footer";
import Secheader from "../../shared/components/secheader";


export default function Demo(){
    return(
        <div>
            <Secheader/>
            <Subheader/>
            <Investor/>
            <Esg/>
            <Benefitbenner/>
            <Feture/>
            <Aliquam/>
            <Footer/>
        </div>
    )
}