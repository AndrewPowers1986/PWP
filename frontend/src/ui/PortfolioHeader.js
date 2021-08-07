import React from "react";
import AP_Logo from "./images/AP_Logo.png"
import {Image} from "react-bootstrap";

export function PortfolioHeader () {
    return (
        <>
            <div className="text-center">
                <Image src={AP_Logo}/>
                    <h1>Andrew Powers</h1>
            </div>
        </>
    )
}