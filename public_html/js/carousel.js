const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButtonText = document.getElementById('rightArrow');
const prevButtonText = document.getElementById('leftArrow');
//const dotsNav = document.querySelector('.carousel_nav');
//const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;
let prevIndex = 1;

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img');
    slideImage.addEventListener('dragstart', (e) => e.preventDefault());

    //Touch Events
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);
})

window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

function touchStart(index) {
    return function(event) {
        currentIndex = index;
        startPos = getPositionX(event);
        isDragging = true;

        animationID = requestAnimationFrame(animation);
    }
}

function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;
    prevIndex = currentIndex;
    const currentSlide = track.querySelector('.current-slide');

    if(movedBy < -100 && currentIndex < slides.length - 1) {
        currentIndex++;
        updateCurrentSlide(currentSlide, currentSlide.nextElementSibling);
    }
    if(movedBy > 100 && currentIndex > 0) {
        currentIndex--;
        updateCurrentSlide(currentSlide, currentSlide.previousElementSibling);
    }

    setPositionByIndex();
}

function touchMove(event) {
    if(isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function animation() {
    setTrackPosition();
    if(isDragging) {
        requestAnimationFrame(animation);
    }
}

function getPositionX(event) {
    return event.touches[0].clientX;
}


function setTrackPosition() {
    track.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
    currentTranslate = currentIndex * -slideWidth;
    prevTranslate = currentTranslate;
    setTrackPosition();
    hideShowArrows(currentIndex);
}

function updateCurrentSlide(currentSlide, targetSlide) {
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

/*Original Code for Carousel With Buttons*/
//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    updateCurrentSlide(currentSlide, targetSlide);
}



const hideShowArrows = (targetIndex) => {
    if(targetIndex === 0) {
        nextButtonText.classList.remove('is-hidden');
        prevButtonText.classList.add('is-hidden');
    } else if (targetIndex === slides.length -1) {
        nextButtonText.classList.add('is-hidden');
        prevButtonText.classList.remove('is-hidden');
    } else {
        nextButtonText.classList.remove('is-hidden');
        prevButtonText.classList.remove('is-hidden');
    }
}

//click left, move slides left
prevButtonText.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    //const currentDot = dotsNav.querySelector('.current-slide');
    //const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(currentSlide, prevSlide);
    //updateDots(currentDot, prevDot);
    hideShowArrows(prevIndex);
})

//click right, move slides right
nextButtonText.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    //const currentDot = dotsNav.querySelector('.current-slide');
    //const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(currentSlide, nextSlide);
    //updateDots(currentDot, nextDot);
    hideShowArrows(nextIndex);
})

// const updateDots = (currentDot, targetDot) => {
//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');
// }

//click nav indicators, move to that slide
// dotsNav.addEventListener('click', e => {
//     //what indicator was clicked on?
//     const targetDot = e.target.closest('button');
//
//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const targetIndex = dots.findIndex(dot => dot === targetDot);
//     const targetSlide = slides[targetIndex];
//
//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);
//     hideShowArrows(slides, prevButton, nextButton, targetIndex);
// })


