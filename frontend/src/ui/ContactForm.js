import React from "react";
import {SectionHeader} from "./SectionHeader";
import {Col, Container, Image, Row} from "react-bootstrap";
import linkedInLogo from "../assets/images/linkedin-logo.png";
import gitHubLogo from "../assets/images/github_logo.png";

export function ContactForm () {
    return (
        <>
            <SectionHeader text={"Get in touch"}/>
            <Container className="border rounded-3 border-1 border-primary p-1 mb-5">
                <Container className="bg-black border rounded-3 border-1 border-primary bg-black py-2">
                    <Row>
                        <Col md>
                            <form className="d-flex flex-column">
                                <label>Name:</label>
                                <input className="m-2" type="text" name="name" size="50"/>

                                <label>E-mail:</label>
                                <input className="m-2" type="text" name="email" size="50"/>

                                <label>Message:</label>
                                <textarea className="m-2" name="message" rows="5" cols="50"/>
                            </form>
                        </Col>
                        <Col className="md d-flex flex-column justify-content-center">
                            <div className="m-4">
                                <a href="https://www.linkedin.com/in/andrew-kelly-powers"><Image src={linkedInLogo} alt="LinkedIn" className="img-link border border-1 border-dark rounded-3"/></a>
                            </div>
                            <div className="m-4">
                                <a href="https://github.com/AndrewPowers1986"><Image src={gitHubLogo} alt="GitHub" className="img-link border border-1 border-dark rounded-3"/></a>
                            </div>
                            <div className="m-4">
                                <a href="https://docs.google.com/document/d/1N3znMWJOslZUVHLybPl55Giwm9Sdpokd/edit"><h2>Resume</h2></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}