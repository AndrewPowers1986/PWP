const body = document.body;
const html = document.documentElement;

const documentHeight = Math.max( body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight );

const numStars = 100;
const blinkDurationMax = 3;
const blinkDelayMax = 5;
const fallDurationMax = 60;
const fallDelayMax = 10;

for(let i = 0; i < numStars; i++) {
    let star = document.createElement('div');

    let starSize = randomNumber(1, 4);
    let starX = randomNumber(0, screen.width);
    let starY = randomNumber(0, documentHeight);
    let blinkDuration = randomNumber(1, blinkDurationMax);
    let blinkDelay = randomNumber(1, blinkDelayMax);
    let fallDuration = randomNumber(15, fallDurationMax);
    let fallDelay = randomNumber(1, fallDelayMax);

    star.style.backgroundColor = `${randomColor()}`;
    star.style.position = "absolute";
    star.style.height = starSize.toString() + "px";
    star.style.width = starSize.toString() + "px";
    star.style.borderRadius = "50%";
    star.style.boxShadow = `0 0 ${starSize}px ${starSize}px #ffffff88 inset`;

    star.style.left = starX.toString() + "px";
    star.style.top = starY.toString() + "px";
    star.style.zIndex = "-999";
    star.style.animation = `blink ${blinkDuration}s ease-in-out ${blinkDelay}s infinite, starfall ${fallDuration}s linear infinite`;
    star.style.WebkitAnimation = `blink ${blinkDuration}s ease-in-out ${blinkDelay}s infinite, starfall ${fallDuration}s linear infinite`;

    body.appendChild(star);
}

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
    console.log(color);
    return color;
}