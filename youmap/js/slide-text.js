
let slides = document.querySelectorAll('.slide_text');
let currentSlide = -1;
let slideInterval = setInterval(nextSlide,1500);

function nextSlide() {
    // slides[currentSlide].className = 'slide_text';
    currentSlide = ++currentSlide;
    slides[currentSlide].style.transform = `translateY(-${currentSlide * 99}px)`;
    slides[currentSlide-1].style.opacity = "0";
    console.log(slides[currentSlide].style.transform);
    if (currentSlide == 4) {
    clearInterval(slideInterval);
    }
    // if (currentSlide == 4) {
    //     currentSlide = -1;
    
    //     }
}

const phone = document.querySelector('.right_part_img')
// console.log(document.scrollTop());




window.addEventListener('scroll', scrollPhone);
function scrollPhone() {
    let vertical_position = pageYOffset;
    console.log(vertical_position);
    if(vertical_position > 2510){
        console.log('dfvdfdf');
        phone.classList.remove('stick');
        phone.classList.add('position');
        // phone.style.transform= "translateY(361%)";
    } else {
        phone.classList.add('stick');
        phone.classList.remove('position');
        // phone.style.transform = "translate(236%, -18%)";
    
        // phone.classList.add('pos');
    }
    // imgPhone.style.marginTop = (vertical_position + 100) + 'px';
    // if(vertical_position > 1250){
    //   // console.log('finish')
    //   imgPhone.style.marginTop = (vertical_position + 100) + 'px';
    //   // your_div.style.marginTop = (vertical_position-100) + 'px';
    // } else if(vertical_position == 2060) {
    //   imgPhone.style.marginTop = (vertical_position - 200) + 'px';
    // }
};
