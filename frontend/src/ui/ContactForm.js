import React from "react";
import {SectionHeader} from "./SectionHeader";
import {Container} from "react-bootstrap";

export function ContactForm () {
    return (
        <>
            <SectionHeader text={"Get in touch"}/>
            <Container>
                <form className="d-flex flex-column">
                    <label>
                        Name:
                        <input className="m-2" type="text" name="name"/>
                    </label>
                    <label>
                        E-mail:
                        <input className="m-2" type="text" name="email"/>
                    </label>
                    <label>
                        Message:
                        <textarea className="m-2" name="message"/>
                    </label>
                </form>
            </Container>
        </>
    )
}