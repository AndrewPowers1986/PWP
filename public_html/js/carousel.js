const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button_right');
const prevButton = document.querySelector('.carousel_button_left');
const nextButtonText = document.getElementById('rightArrow');
const prevButtonText = document.getElementById('leftArrow');
//const dotsNav = document.querySelector('.carousel_nav');
//const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

window.onresize = (e) => {
    slides.forEach(setSlidePosition);
}


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')
}

// const updateDots = (currentDot, targetDot) => {
//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');
// }

const hideShowArrows = (slides, prevButtonText, nextButtonText, targetIndex) => {
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

    moveToSlide(track, currentSlide, prevSlide);
    //updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButtonText, nextButtonText, prevIndex);
})

//click right, move slides right
nextButtonText.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    //const currentDot = dotsNav.querySelector('.current-slide');
    //const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    //updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButtonText, nextButtonText, nextIndex);
})

prevButton.addEventListener('ontouchstart', e => {
    prevButton.classList.remove('carousel_button_appearance');
    prevButton.classList.add('carousel_button_appearance_active');
})

nextButton.addEventListener('ontouchstart', e => {
    nextButton.classList.remove('carousel_button_appearance');
    nextButton.classList.add('carousel_button_appearance_active');
})

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
