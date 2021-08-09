import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {SectionHeader} from "./SectionHeader";
import selfPortrait from "../assets/images/BillMurray.png";

export function AboutMe () {
    return (
        <>
            <SectionHeader text={"A little bit about me"}/>
            <Container className="border rounded-3 border-1 border-primary p-1 mb-5">
                <Container className="border rounded-3 border-1 border-primary bg-transparent pt-2">
                    <Row>
                        <Col md={3}>
                            <Image src={selfPortrait} className="img-fluid mx-auto d-block"/>
                        </Col>
                        <Col md={9} className="d-block mx-auto">
                            <p>I am proud to have served over 10 years in the United States Navy, acquiring invaluable experience and wearing many hats: leader, manager, mentor, instructor, inspector, problem-solver, liaison, technician, scholar, voyager, and friend... to name just a few. But I can't describe how excited I am to take the next step in this journey, to pursue a love that predates my career in the military. Coding has always felt a bit like magic to me, a way to radically expand a human mind's ability to solve complex problems. Share this adventure with me as we team up and do big things.</p>
                        </Col>
                    </Row>


                </Container>
            </Container>

        </>
    )
}