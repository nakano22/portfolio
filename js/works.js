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

/* --------------------------
swiperの設定
-------------------------- */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    768: {
      slidesPerView: 1,
      slidesPerGroup: 3,
      spaceBetween: 40,
      grid: {
        rows: 2,
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      // ページネーションに番号を表示
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
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
    console.log(distance);
  });
});