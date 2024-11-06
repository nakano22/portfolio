/* ----------------------------
ハンバーガーメニュー開閉制御
---------------------------- */
const navi = document.querySelector('.navi');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const body = document.body;

const toggleMenu = () => {
  navi.classList.toggle('active');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
  body.classList.toggle('isScrollAllowed');
}

hamburger.addEventListener('click', () => {
  toggleMenu();
});

overlay.addEventListener('click', () => {
  toggleMenu();
});

navi.addEventListener('click', () => {
  toggleMenu();
});

/* ----------------------------
swiperの設定
---------------------------- */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1.8,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    900: {
      slidesPerView: 3.8,
      spaceBetween: 60,
    }
  }
});

/* ----------------------------
カード内画像のフェードイン
---------------------------- */
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const items = document.querySelectorAll('.item-img');

  items.forEach(function (item) {
    const distance = item.offsetTop + item.offsetHeight;
    if (scroll + windowHeight > distance) {
      item.classList.add('fade');
    }
    console.log(distance);
  });
});
