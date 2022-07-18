let slides = document.querySelectorAll('.slide_text');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,1500);

function nextSlide() {
    slides[currentSlide].className = 'slide_text';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide_text showing';
    if (currentSlide == 4) {
    clearInterval(slideInterval);
    }
}