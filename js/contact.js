/* --------------------------
ハンバーガーメニュー開閉制御
-------------------------- */
const headerArea = document.querySelector('.header-area');
const navi = document.querySelector('.navi');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');

const toggleMenu = () => {
  headerArea.classList.toggle('active');
  navi.classList.toggle('active');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
}

hamburger.addEventListener('click', () => {
  toggleMenu();
});

navi.addEventListener('click', () => {
  toggleMenu();
});
