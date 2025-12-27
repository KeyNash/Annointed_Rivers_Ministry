// --- Simple Crossfade Slideshow ---
let slideIndex = 0;
const slides = document.querySelectorAll('.slides');
showSlides(slideIndex);

function showSlides(n) {
  slides.forEach(s => s.style.display = "none");
  slides[n].style.display = "block";
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlides(slideIndex);
}

// Auto-change every 5s
setInterval(() => nextSlide(), 5000);

// Arrow listeners
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
