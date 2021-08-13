import React from "react";
import AP_Logo from "../../../public_html/assets/images/AP_Logo.svg"
import {Container, Image} from "react-bootstrap";

export function PortfolioHeader () {
    return (
        <>
            <Container className="border border-1 rounded-3 border-primary my-5 p-1">
                <Container className="border border-1 rounded-3 border-primary bg-black">
                    <div className="text-center">
                        <h1>High Score!</h1>
                        <Image src={AP_Logo} alt="AP Logo"/>
                        <h1>Andrew K. Powers</h1>
                    </div>
                </Container>
            </Container>
        </>
    )
}