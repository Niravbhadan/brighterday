import React from "react";

import Approach from "./approach";
import Herobanner from "./herobanner";
import Productsection from "./productsection";
import Benefit from "./benefit";
import Methodology from "./methodology";
import Process from "./process";
import Indicator from "./indicator";
import Feedback from "./feedbacksection";
import Solution from "./solution";
import Header from "../../shared/components/header";
import Footer from "../../shared/components/footer";

export default function Home(){
    return(
        <div>
            <Header/>
            <Herobanner/>
            <Approach/>
            <Productsection/>
            <Benefit/>
            <Methodology/>
            <Process/>
            <Indicator/>
            <Feedback/>
            <Solution/>
            <Footer/>
        </div>
    )
}