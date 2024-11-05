document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.hamburger-menu');
  const background = document.querySelector('.hamburger-background');

  hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      background.classList.remove('mask');
      menu.classList.remove('active');
    } else {
      hamburger.classList.add('active');
      background.classList.add('mask');
      menu.classList.add('active');
    }
  });

  menu.addEventListener('click', () => {
    hamburger.classList.remove('active');
    body.classList.remove('mask');
    menu.classList.remove('active');
  });
});