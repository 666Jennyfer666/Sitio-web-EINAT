/* carrousel de imagenes */
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  let currentSlide = 0;

  function showSlide(slideIndex) {
      slides[currentSlide].style.display = "none";
      currentSlide = (slideIndex + slides.length) % slides.length;
      slides[currentSlide].style.display = "block";
  }

  function nextSlide() {
      showSlide(currentSlide + 1);
  }

  // Inicia el carrusel y configura el intervalo de cambio
  showSlide(currentSlide);
  setInterval(nextSlide, 4000); // Cambiar cada 4 segundos (4000 ms)
});
/* final carrousel img index */

/* acessos rapidos */
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageCount = carousel.children.length;
let currentIndex = 0;

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 2.2) % imageCount;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 2.2 + imageCount) % imageCount;
  updateCarousel();
});

function updateCarousel() {
  const translateX = -currentIndex * 7; // 7% para cada imagen
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = `translateX(${translateX}%)`;

  // Restablecer la transición después de que termine la animación
  setTimeout(() => {
    carousel.style.transition = "none";
  }, 500);
 } // 0.4 segundos (ajusta según la duración de tu animación)

 // para las pantallas mas pequeñas
 if (window.matchMedia('(max-width: 768px)').matches) {
  // Modifica el comportamiento en pantallas más pequeñas
  nextButton.addEventListener('click', () => {
    // Lógica diferente para pantallas más pequeñas
    currentIndex = (currentIndex + 1) % imageCount; // Mover dos imágenes a la vez

    if (currentIndex === 0) {
      currentIndex = imageCount - 1; // Ir al penúltimo conjunto de dos imágenes al llegar al principio
    }
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageCount; // Mover una imagen a la vez
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageCount) % imageCount; // Mover una imagen a la vez
  updateCarousel();

  
    if (currentIndex === imageCount - 1) {
      currentIndex = 2; // Ir al segundo conjunto de dos imágenes al llegar al final
    }
    updateCarousel();
  });
}
/* final acessos rapidos */

