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

/* ----------------------------
フェードイン
---------------------------- */
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const items = document.querySelectorAll('.fadein');

  items.forEach(function (item) {
    const distance = item.offsetTop + item.offsetHeight;
    if (scroll + windowHeight > distance) {
      item.classList.add('fade');
    }
    console.log(scroll, distance);
    console.log(windowHeight);
  });
});