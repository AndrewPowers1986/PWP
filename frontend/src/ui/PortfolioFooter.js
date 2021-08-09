import React from "react";
import {Image} from "react-bootstrap";

import footerImage from "../assets/images/TextBanner_Dissolve3dPixels_Blue.png";

export function PortfolioFooter () {
    return (
        <>
            <Image src={footerImage} alt="Footer"/>
        </>
    )
}