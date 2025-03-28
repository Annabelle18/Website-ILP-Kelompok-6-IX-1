const slide = document.getElementById('carouselSlide');
const totalSlides = slide.children.length;
let currentIndex = 0;

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  slide.style.transform = `translateX(-${currentIndex * 700}px)`;
}
