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
  const footer = document.getElementById("footer-rights");

  // Posisi bawah dari jendela viewport
  const windowBottom = window.innerHeight + window.scrollY;
  // Posisi atas dari footer
  const footerTop = footer.offsetTop;

  // Ketika scroll lebih tinggi dari 200 viewport height, tambahkan kelas show-scroll
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }

  // Sembunyikan tombol scroll-up ketika mencapai footer
  if (windowBottom >= footerTop) {
    scrollUp.style.display = "none";
  } else {
    scrollUp.style.display = "block";
  }
}

window.addEventListener("scroll", scrollUp);

// Panggil fungsi saat halaman dimuat
scrollUp();

/*==================== SCROLL REVEAL ====================*/
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
});

ScrollReveal().reveal(".journey__data", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".journey__img-overlay", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".review__subtitlegrup", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".customer__content", {
  ...scrollRevealOption,
  origin: "top",
  interval: 200,
});

/*==================== WHATS APP POP UP ====================*/
// Pilih elemen popup WhatsApp dan footer
const whatsappPopup = document.getElementById("whatsapp-popup");
const footer = document.getElementById("footer-rights");

// Fungsi untuk mengecek posisi scroll
function checkScrollPosition() {
  // Posisi bawah dari jendela viewport
  const windowBottom = window.innerHeight + window.scrollY;
  // Posisi atas dari footer
  const footerTop = footer.offsetTop;

  // Jika posisi bawah jendela melebihi posisi atas footer, sembunyikan popup
  if (windowBottom >= footerTop) {
    whatsappPopup.style.display = "none";
  } else {
    whatsappPopup.style.display = "block";
  }
}

// Tambahkan event listener untuk scroll
window.addEventListener("scroll", checkScrollPosition);

// Panggil fungsi saat halaman dimuat
checkScrollPosition();
