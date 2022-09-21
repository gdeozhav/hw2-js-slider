const buttonPrev = document.querySelector('.prev-btn-js');
const buttonNext = document.querySelector('.next-btn-js');
const slideLine = document.querySelector('.slide-line-js');
const slideLineImages = document.querySelectorAll('.slide');
const slidesNumber = slideLineImages.length;

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);
slideLine.addEventListener('transitionend', jumpTo);

let currentSlide = 1; 
let autoScroll = setInterval(nextSlide, 5000); //clear later

slideLine.style.transform = `translateX(${-100}%)`; //offset to 1st picture

function nextSlide() {
    slideLine.style.transition = 'transform .3s';
    
    currentSlide +=1;
    if (currentSlide >= slidesNumber) currentSlide = 0;
    slideLine.style.transform = `translateX(${currentSlide * -100}%)`;
}

function prevSlide() {
    slideLine.style.transition = 'transform .3s';
    currentSlide -= 1;
    if (currentSlide < 0) currentSlide = slidesNumber - 1;
    slideLine.style.transform = `translateX(${currentSlide * -100}%)`;
}

function jumpTo() {
    if (slideLineImages[currentSlide].id === 'lastSlide') {
        //seamless carousel => turn off transition and jump to another slide
        slideLine.style.transition = 'none';

        currentSlide = slidesNumber - 2;

        slideLine.style.transform = `translateX(${currentSlide * -100}%)`;
    }

    if (slideLineImages[currentSlide].id === 'firstSlide') {
        slideLine.style.transition = 'none';

        currentSlide = slidesNumber - currentSlide;

        slideLine.style.transform = `translateX(${currentSlide * -100}%)`;
    }
}

