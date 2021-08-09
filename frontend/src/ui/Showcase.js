import React from "react";
import {Container} from "react-bootstrap";

import blankImg from "../assets/images/150x150.png";
import {ShowcaseItem} from "./ShowcaseItem";
import {SectionHeader} from "./SectionHeader";
import * as ReactDOM from "react-dom";

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

const size = showcaseItems.length;
let showcaseOrder = initOrder();
let visibleShowcaseItems = setVisibleItems();

export function Showcase () {
    return (
        <>
            <SectionHeader text={"Some examples of my work"}/>
            <Container id="showcase" className="bg-transparent d-flex flex-row justify-content-around" fluid="true">
                {visibleShowcaseItems}
            </Container>
            <Container className="d-flex justify-content-around mb-5">
                <button onClick={updateOrderRight}>Slide Right</button>
                <button onClick={updateOrderLeft}>Slide Left</button>
            </Container>
        </>
    )
}


function initOrder () {
    switch (size) {
        case(6):
            return [3, 4, 5, 0, 1, 2, 3];
        case(5):
            return [2, 3, 4, 0, 1, 2, 3];
        case(4):
            return [1, 2, 3, 0, 1, 2, 3];
        case(3):
            return [0, 1, 2, 0, 1, 2, 0];
        case(2):
            return [1, 0, 1, 0, 1, 0, 1];
        case(1):
            return [0, 0, 0, 0, 0, 0, 0];
        default:
            return [size - 3, size - 2, size - 1, 0, 1, 2, 3];
    }
}

function updateOrderRight () {
    for(let i = 0; i < showcaseOrder.length; i++) {
        if(showcaseOrder[i] === 0) {
            showcaseOrder[i] = showcaseItems.length - 1;
        } else {
            showcaseOrder[i]--;
        }
    }
    updateShowcase();
}


function updateOrderLeft () {
    for(let i = 0; i < showcaseOrder.length; i++) {
        if(showcaseOrder[i] === showcaseItems.length - 1) {
            showcaseOrder[i] = 0;
        } else {
            showcaseOrder[i]++;
        }
    }
    updateShowcase();
}


function updateShowcase() {
    visibleShowcaseItems = setVisibleItems();
    ReactDOM.render(visibleShowcaseItems, document.getElementById('showcase'));
}


function setVisibleItems() {
    let visibleItems = [];
    showcaseOrder.forEach(index => {
        visibleItems.push(showcaseItems[index]);
    })
    return visibleItems;
}