let currentIndex = 0;

function moveSlide(direction) {
    const slide = document.getElementById('carouselSlide');
    const totalItems = slide.children.length;
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}
