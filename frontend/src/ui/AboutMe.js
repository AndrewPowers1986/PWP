import React from "react";
import {Container} from "react-bootstrap";
import {SectionHeader} from "./SectionHeader";

export function AboutMe () {
    return (
        <>
            <SectionHeader text={"A little bit about me"}/>
            <Container className="mb-5">
                <p>I am proud to have served over 10 years in the United States Navy, acquiring invaluable experience and wearing many hats: leader, manager, mentor, instructor, inspector, problem-solver, liaison, technician, scholar, voyager, and friend... to name just a few. But I can't describe how excited I am to take the next step in this journey, to pursue a love that predates my career in the military. Coding has always felt a bit like magic to me, a way to radically expand a human being's ability to solve complex problems.</p>
            </Container>
        </>
    )
}