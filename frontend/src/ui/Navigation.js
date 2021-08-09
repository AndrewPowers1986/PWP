import React from "react";
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import AP_Logo from "../assets/images/AP_Logo.svg";
import styles from "../assets/styles/style.css";
import background from "../assets/images/TextBanner_Dissolve3dPixels_Blue.png";

export function Navigation() {
    return (
        <Navbar className="fixed-top" expand="md" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: '75% 100%'}}>
            <Container className="px-5 py-2">
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Navbar.Brand href="/"><Image src={AP_Logo} className="img-link"/></Navbar.Brand>
                    <Nav className="bg-transparent">
                        <Nav.Link href="/"><h3>About</h3></Nav.Link>
                        <Nav.Link href="/"><h3>Showcase</h3></Nav.Link>
                        <Nav.Link href="/"><h3>Contact</h3></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}