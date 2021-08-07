import React from "react";
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import AP_Logo from "./images/AP_Logo.png"
import "./styles/style.css"

export function Navigation() {
    return (
        <Navbar className="fixed-top" bg="light" variant="light" expand="md" >
            <Container className="border-dark border border-3 rounded-3 px-5 py-2">
                <Navbar.Toggle className="ms-auto" aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Navbar.Brand href="/"><Image src={AP_Logo} className="img-link"/></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}