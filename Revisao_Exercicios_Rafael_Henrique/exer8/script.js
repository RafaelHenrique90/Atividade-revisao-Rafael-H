/* Rafael Henrique Braga de Morais */
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000);
}

showSlides();

prevBtn.addEventListener('click', () => {
  if (slideIndex === 1) {
    slideIndex = slides.length;
  } else {
    slideIndex--;
  }
  showSlides();
});

nextBtn.addEventListener('click', () => {
  if (slideIndex === slides.length) {
    slideIndex = 1;
  } else {
    slideIndex++;
  }
  showSlides();
});
