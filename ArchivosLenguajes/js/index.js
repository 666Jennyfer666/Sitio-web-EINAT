/* banner de img */
const carousel = document.querySelector('.carousel2');
  const dots = document.querySelectorAll('.dot');

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 103; // Cambiado a 100
    carousel.style.transform = `translateX(${offset}%)`; // Cambiado a %
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % 3; 
    updateCarousel();
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  setInterval(nextSlide, 5000); // Cambiar automáticamente cada 5 segundos (en milisegundos)
  
  /* acessos rapidos */

  $(document).ready(function() {
    // Cuando se pasa el cursor sobre un elemento del menú
    $('.item-menu-aguas a').hover(
    function() {
      // Mostrar el cuadro de información
      $(this).find('.menu-title, .img-mega-menu').show();
      
      // Crear y posicionar el cuadro de información
      var infoBox = $('<div class="menu-info-box"></div>');
      infoBox.append($(this).find('.menu-title').text());
      infoBox.append($(this).find('.img-mega-menu').clone());
      infoBox.css({
        top: $(this).offset().top + $(this).outerHeight() + 10,
        left: $(this).offset().left
      });
      $('body').append(infoBox);
    },
    function() {
      // Ocultar el cuadro de información al quitar el cursor
      $(this).find('.menu-title, .img-mega-menu').hide();
      $('.menu-info-box').remove();
    }
    );
    });