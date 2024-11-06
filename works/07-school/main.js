const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('.navi');
const menu = document.querySelector('.menu');
const btn = document.querySelector('.btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navi.classList.toggle('active');
});

menu.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navi.classList.remove('active');
});

btn.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navi.classList.remove('active');
});