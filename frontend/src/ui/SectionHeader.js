import React from "react";
import {Container} from "react-bootstrap";

export function SectionHeader (props) {
    return (
        <>
            <Container className="border border-2 rounded-3 border-dark px-5 py-2 mb-5">
                <h3 className="">{props.text}</h3>
            </Container>
        </>
    )
}