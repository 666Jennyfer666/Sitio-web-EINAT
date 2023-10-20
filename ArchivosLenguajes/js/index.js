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
