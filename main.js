let input = document.querySelector('.form-input');
let inpt = document.querySelector('.form-inpt');
let button = document.querySelector('.form-button');
let spisok = document.querySelector('.top')

function createListItem(text){
  let li = document.createElement('li')
  let span = document.createElement('span')
  let btn = document.createElement('button')

  span.textContent = text;
  btn.textContent = "Видалити!";4

  li.append(span);
  li.append(btn);

  return li;
}

function getSum(){
    let resultSum = Number(input.value) + Number(inpt.value)
    return resultSum;
}

button.addEventListener('click', event => {
    let myLi = createListItem(getSum())
    spisok.append(myLi)
})


// const imageContainer = document.querySelector('.slider-photo')
// const nextButton = document.querySelector('.slider__button-next')
// const backButton = document.querySelector('.slider__button-back')

// let images = [
//     './1.jpg',
//     './2.jpg',
//     './3.jpg',
//     './4.jpg',
//     './5.jpg',
//     './kenny-eliason-z3kBG5xIhjo-unsplash.jpg',
// ];

// let currentImage = 0;
// imageContainer.src = images[currentImage]



// function nextImage(){
//     currentImage++;
//     if (currentImage > images.length - 1) {
//         currentImage = images.length - 1;
//     }
//     imageContainer.src = images[currentImage]
// }

// function prevImage(){
//     currentImage--;
//     if (currentImage < 0) {
//         currentImage = 0;
//     }
//     imageContainer.src = images[currentImage]
// }

// nextButton.addEventListener('click', nextImage);
// backButton.addEventListener('click', prevImage);