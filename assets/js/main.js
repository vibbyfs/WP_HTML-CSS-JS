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
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".review__container", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".review-pagination",
    clickable: true,
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

/*==================== SCROLL REVEAL ====================*/
// const sr = ScrollReveal({
//   distance: "50px",
//   duration: 1000,
//   reset: true,
// });

// sr.reveal(`.home__data`, {
//   origin: "top",
//   interval: 100,
// });

// sr.reveal(`.journey__data`, {
//   origin: "left",
// });

// sr.reveal(`.journey__img-overlay`, {
//   origin: "right",
//   interval: 100,
// });

// sr.reveal(`.customer__img`, {
//   origin: "top",
//   delay: 300,
// });

const scrollRevealOption = {
  distance: "50px",
  duration: 2000,
  reset: true,
};

ScrollReveal().reveal(".home__data", {
  ...scrollRevealOption,
  origin: "top",
});

ScrollReveal().reveal(".bestseller__data", {
  ...scrollRevealOption,
  origin: "right",
  delay: 400,
});

ScrollReveal().reveal(".journey__data", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".journey__img-overlay", {
  ...scrollRevealOption,
  origin: "right",
  delay: 200,
});

ScrollReveal().reveal(".review__subtitlegrup", {
  ...scrollRevealOption,
  origin: "left",
  delay: 400,
});

ScrollReveal().reveal(".customer__content", {
  ...scrollRevealOption,
  origin: "top",
  interval: 200,
});
