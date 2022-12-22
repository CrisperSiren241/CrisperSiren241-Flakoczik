const hb = document.querySelector('.burger-button');
const menu = document.querySelector('.header');

hb.addEventListener('click', function(){
  menu.classList.toggle('active')
})

$('.product__images-large').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__images-small'
  });
  $('.product__images-small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product__images-large',
    ScenterMode: true,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    variableWidth: false
  });