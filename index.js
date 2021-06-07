/*
    Grabbing all carousel items and attaching button event listeners
    

    4) Add event listeners to both buttons 'carousel-button-next' and 'carousel-button-prev' - seeing as though we expect the user to click to change slide position, make sure we set the eventListener to 'click' and the second arguments will be functions!
    5) Create two functions: moveToNextSlide and moveToPrevSlide - use both of these in action 4 as the second argument on your 'addEventListener' - don't worry about these functions being empty, we will add to them in the upcoming screencasts
    6) Use console.log to validate that you have 3 'carousel-item' in your 'slides' const
*/

const slides = document.getElementsByClassName("carousel-items");
let slidePos = 0;
const totalSlides = slide.length;


document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide() {})
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide() {})

function moveToNextSlide() {
    console.log('moving to the next slide!'); 
}
function moveToPrevSlide() {
    console.log('moving to the prev slide!'); 
}