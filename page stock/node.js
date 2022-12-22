const hb = document.querySelector('.burger-button');
const menu = document.querySelector('.header');

hb.addEventListener('click', function(){
  menu.classList.toggle('active')
})