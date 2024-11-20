/*===== HEADER=====*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SWIPPER ====================*/
var swiper = new Swiper(".bestseller__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  // slidesPerView: 3,
  // slidesPerGroup: 1,
  // loop: true,
  // loopedSlides: 1,
  spaceBetween: 20,
  // initialSlide: 0,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    slideShadow: true,
  },

  navigation: {
    nextE1: ".swiper__next",
    prevE1: ".swiper__prev",
  },
  keyboard: {
    enable: true,
  },
  mousewheel: {
    thresholDelta: 70,
  },
  breakpoints: {
    560: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review__container", {
  effect: "coverflow",
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: 2,
  // slidesPerGroup: 1,
  // loop: true,
  // loopedSlides: 1,
  spaceBetween: 20,
  // initialSlide: 0,
  coverflowEffect: {
    rotate: 0,
  },
});

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
