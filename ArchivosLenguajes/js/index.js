/* carrousel de imagenes */

/* final carrousel img index */

/* letra titulo */
document.addEventListener("DOMContentLoaded", function() {
  var letras = document.querySelectorAll(".letra");
  letras.forEach(function(letra, index) {
    setTimeout(function() {
      letra.classList.add("loaded");
    }, index * 200);
  });
});
/* end letra titulo */

/* acessos rapidos */
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageCount = carousel.children.length;
let currentIndex = 0;

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 2.4) % imageCount;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 2.4 + imageCount) % imageCount;
  updateCarousel();
});

function updateCarousel() {
  const translateX = -currentIndex * 7; // 7% para cada imagen
  carousel.style.transition = "transform 0.4s ease-in-out";
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

