import React from "react";
import {AboutMe} from "./AboutMe";
import {PortfolioHeader} from "./PortfolioHeader";
import {Showcase} from "./Showcase";
import {ContactForm} from "./ContactForm";
import {SectionHeader} from "./SectionHeader";

export function Home () {
    return (
        <>
            <SectionHeader text=""/>
            <PortfolioHeader/>
            <AboutMe/>
            <Showcase/>
            <ContactForm/>
        </>
    )
}