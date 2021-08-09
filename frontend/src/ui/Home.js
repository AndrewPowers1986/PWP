import React from "react";
import {AboutMe} from "./AboutMe";
import {PortfolioHeader} from "./PortfolioHeader";
import {Showcase} from "./Showcase";
import {ContactForm} from "./ContactForm";
import {Container} from "react-bootstrap";

export function Home () {
    return (
        <>
            <Container className="p-5"/>
            <PortfolioHeader/>
            <AboutMe/>
            <Showcase/>
            <ContactForm/>
        </>
    )
}