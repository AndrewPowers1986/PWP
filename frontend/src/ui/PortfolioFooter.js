import React from "react";
import {Image} from "react-bootstrap";

import footerImage from "../../../public_html/assets/images/TextBanner_Dissolve3dPixels_Blue.png";

export function PortfolioFooter () {
    return (
        <>
            <Image src={footerImage} alt="Footer"/>
        </>
    )
}