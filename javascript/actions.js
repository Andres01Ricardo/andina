const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
});



const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const images = document.querySelector('.carousel-images');

let currentIndex = 0;
const totalImages = images.children.length;

function showImage() {
  images.style.marginLeft = `-${currentIndex * 100}%`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
  showImage();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
  showImage();
});

showImage();
