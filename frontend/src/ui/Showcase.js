import React, { useState } from "react";
import {Container} from "react-bootstrap";

import blankImg from "../assets/images/150x150.png";
import {ShowcaseItem} from "./ShowcaseItem";
import {SectionHeader} from "./SectionHeader";

const imgURLs = [
    blankImg,
    blankImg,
    blankImg,
    blankImg,
    blankImg,
    blankImg,
    blankImg
];

const projectURLs = [
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];

const projectDescriptions = [
    "#1",
    "#2",
    "#3",
    "#4",
    "#5",
    "#6",
    "#7",
];

const showcaseItems = [];

for(let i = 0; i < imgURLs.length; i++) {
    showcaseItems.push(<ShowcaseItem key={i} imgURL={imgURLs[i]} projectURL={projectURLs[i]} projectText={projectDescriptions[i]}/>);
}

export function Showcase () {

    const [currentShowcaseItem, setCurrentShowcaseItem] = useState(0);

    function slideRight() {
        console.log("Sliding Right");
        setCurrentShowcaseItem(previousShowcaseItem => {
            console.log("previousShowcaseItem: " + previousShowcaseItem);
            if(previousShowcaseItem === 0) {
                console.log("Returning: " + showcaseItems.length - 1);
                previousShowcaseItem = showcaseItems.length - 1;
            } else {
                console.log("Returning: " + previousShowcaseItem - 1);
                previousShowcaseItem--;
            }

            return previousShowcaseItem;
        })
    }

    function slideLeft() {
        console.log("Sliding Left");
        setCurrentShowcaseItem(previousShowcaseItem => {
            if(previousShowcaseItem === showcaseItems.length - 1) {
                previousShowcaseItem = 0;
            } else {
                previousShowcaseItem++;
            }

            return previousShowcaseItem;
        })
    }

    return (
        <>
            <SectionHeader text={"Some examples of my work"}/>
            <Container id="showcase" className="bg-transparent d-flex flex-row justify-content-around" fluid="true">
                {showcaseItems[currentShowcaseItem]}
            </Container>
            <Container className="d-flex justify-content-around mb-5">
                <button onClick={slideRight}>Slide Right</button>
                <button onClick={slideLeft}>Slide Left</button>
            </Container>
        </>
    )
}