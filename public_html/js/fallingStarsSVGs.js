

const body = document.body;
const html = document.documentElement;

const documentHeight = Math.max( body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight );

// let svg = document.getElementById("starfallBG");
let svg = document.createElement('svg');
svg.setAttribute("width", screen.width.toString());
svg.setAttribute("height", documentHeight.toString());
svg.style.position = "absolute";
svg.style.left = "0";
svg.style.top = "0";
svg.style.width = "100%";
svg.style.height = "100%";
svg.style.zIndex = "-999";
svg.setAttribute("viewBox", "0 0 200 100");

const maxStarSize = 0.25;
const numStars = 200;
const blinkDurationMax = 3;
const blinkDelayMax = 5;
const fallDurationMax = 30;

function starfall() {
    for(let i = 0; i < numStars; i++) {
        let starShape = document.createElement('circle');
        let starAnimation = document.createElement('animateTransform')

        let starSize = randomNumber(0.01, maxStarSize);
        let starX = randomNumber(0, 200);
        let starY = randomNumber(0, 100);
        let color = `${randomColor()}`;
        let blinkDuration = randomNumber(1, blinkDurationMax);
        let blinkDelay = randomNumber(1, blinkDelayMax);
        let fallDuration = randomNumber(5, fallDurationMax);

        starShape.setAttribute("cx", starX.toString());
        starShape.setAttribute("cy", starY.toString());
        starShape.setAttribute("r", starSize.toString());
        starShape.setAttribute("fill", color);
        starShape.setAttribute("stroke", color);
        starShape.setAttribute("stroke-width", "0.1");
        starShape.classList.add('fallingStar');

        starAnimation.setAttribute("attributeName", "transform");
        starAnimation.setAttribute("type", "translate");
        starAnimation.setAttribute("from", `${starX} -150`);
        starAnimation.setAttribute("to", `${starX} 200`);
        starAnimation.setAttribute("dur", `${fallDuration}s`);
        starAnimation.setAttribute("repeatCount", "indefinite");

        starShape.appendChild(starAnimation);
        svg.appendChild(starShape);
    }
}

//body.appendChild(svg);

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function randomHex() {
    let hex = Math.floor(randomNumber(0, 15));
    switch(hex) {
        case(10): return "a";
        case(11): return "b";
        case(12): return "c";
        case(13): return "d";
        case(14): return "e";
        case(15): return "f";
        default: return hex.toString();
    }
}

function randomColor() {
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += randomHex();
    }
    return color;
}