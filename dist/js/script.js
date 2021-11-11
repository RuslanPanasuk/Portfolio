const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const levels = document.querySelectorAll('.skils__indicator-level');
const levelBars = document.querySelectorAll('.skils__indicator-bar-level');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

levels.forEach((item, i) => {
  levelBars[i].style.width = item.innerHTML;
})