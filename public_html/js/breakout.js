let paddleTarget = screen.availWidth/2;
const paddleStride = 1;
const paddleSpeed = 1;
const breakoutPaddle = document.getElementById("breakoutPaddle");


document.addEventListener('mousemove', (event) => {
    if(navigator.userAgent.toLowerCase().match(/mobile/i)) {
        paddleTarget = event.clientX;
        breakoutPaddle.style.left = breakoutPaddle.getBoundingClientRect().left.toString() + "px";
        paddleMoment();
    } else {
        breakoutPaddle.style.left = (event.clientX - 100).toString() + "px";
    }

})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function paddleMoment () {
    while(breakoutPaddle.getBoundingClientRect().left + 100 < paddleTarget) {
        breakoutPaddle.style.left = (breakoutPaddle.getBoundingClientRect().left + paddleStride).toString() + "px";
        await sleep(paddleSpeed);
    }
    while(breakoutPaddle.getBoundingClientRect().left + 100 > paddleTarget) {
        breakoutPaddle.style.left = (breakoutPaddle.getBoundingClientRect().left - paddleStride).toString() + "px";
        await sleep(paddleSpeed);
    }
}