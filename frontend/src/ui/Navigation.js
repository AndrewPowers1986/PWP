import React from "react";
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import AP_Logo from "../assets/images/AP_Logo.svg";
import "../assets/styles/style.css";
import background from "../assets/images/TextBanner_Dissolve3dPixels_Blue.png";

export function Navigation() {
    return (
        <Navbar className="fixed-top" expand="md" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: '75% 100%'}}>
            <Container className="px-5 py-2">
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Navbar.Brand href="/"><Image src={AP_Logo} alt="Home" className="img-link border border-2 rounded-3 p-1"/></Navbar.Brand>
                    <Nav className="bg-transparent">
                        <h3>&#8226;</h3>
                        <Nav.Link href="/"><h3 className="text-decoration-underline">About</h3></Nav.Link>
                        <h3>&#8226;</h3>
                        <Nav.Link href="/"><h3 className="text-decoration-underline">Showcase</h3></Nav.Link>
                        <h3>&#8226;</h3>
                        <Nav.Link href="/"><h3 className="text-decoration-underline">Contact</h3></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}