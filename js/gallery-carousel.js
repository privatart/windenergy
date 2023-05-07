const slides = [
  '<div><img src="img/carousel/slide-1.jpg" alt="windgenerator"></div>',
  '<div><img src="img/carousel/slide-2.jpg" alt="windgenerator"></div>',
  '<div><img src="img/carousel/slide-3.jpg" alt="windgenerator"></div>',
  '<div><img src="img/carousel/slide-4.jpg" alt="windgenerator"></div>',
  '<div><img src="img/carousel/slide-5.jpg" alt="windgenerator"></div>',
  '<div><img src="img/carousel/slide-6.jpg" alt="windgenerator"></div>',
  '<div><img src="img/carousel/slide-7.jpg" alt="windgenerator"></div>',
  '<div><img src="img/carousel/slide-9.jpg" alt="windgenerator"></div>',
  '<div><img src="img/carousel/slide-8.jpg" alt="windgenerator"></div>',
];

let currentSlide = 0;

function showCurrentSlide() {
  const slideContainer = document.querySelector(".gallery__carousel-slide");
  slideContainer.innerHTML = slides[currentSlide];
}

function nextSlide() {
  currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
  showCurrentSlide();
}

function prevSlide() {
  currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
  showCurrentSlide();
}

nextSlide();
setInterval(nextSlide, 4000);

const btnNext = document.querySelector(".gallery__carousel-btn-next");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".gallery__carousel-btn-prev");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", showCurrentSlide);
