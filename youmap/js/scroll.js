
window.addEventListener('scroll', scrollik);
function scrollik() {
    const your_div = document.getElementById('some_div');
    console.log(your_div);

    let vertical_position = pageYOffset;
    console.log(vertical_position);
    your_div.style.marginTop = (vertical_position+100) + 'px';
    if(vertical_position > 1250){
      // console.log('finish')
      your_div.style.marginTop = (vertical_position+100) + 'px';
      console.log('gffggf')
      // your_div.style.marginTop = (vertical_position-100) + 'px';
    } else if(vertical_position == 2060) {
      your_div.style.marginTop = (vertical_position-200) + 'px';
    }
}


