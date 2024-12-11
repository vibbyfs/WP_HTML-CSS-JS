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
  if (this.scrollY >= 10) header.classList.add("scroll-header");
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

ScrollReveal().reveal(".journey__header", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".journey__img-overlay", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".review__header", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".customer__content", {
  ...scrollRevealOption,
  origin: "top",
  interval: 100,
});

ScrollReveal().reveal(".card__available", {
  ...scrollRevealOption,
  origin: "top",
  interval: 100,
});

ScrollReveal().reveal(".detail__1", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".detail__2", {
  ...scrollRevealOption,
  origin: "right",
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

/*==================== MENU FILTER & SORT ====================*/
const menuButton = document.querySelectorAll(".menu__button");
const menuFilterCard = document.querySelectorAll(
  ".menu__filtercard .menu__card"
);
const sortLowToHighButton = document.getElementById("sortLowToHigh");
const sortHighToLowButton = document.getElementById("sortHighToLow");
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
const dropdownContent = document.getElementById("dropdownContent");
let sortOrder = "low-to-high";
let selectedCategory = "All";

// Fungsi untuk menutup dropdown
const closeDropdown = () => {
  dropdownContent.classList.add("hidden");
};

// Fungsi untuk membuka dropdown
const openDropdown = () => {
  dropdownContent.classList.remove("hidden");
};

// Fungsi untuk menyaring kartu berdasarkan kategori
const filterCards = (e) => {
  document
    .querySelector(".menu__button-active")
    ?.classList.remove("menu__button-active");
  e.target.classList.add("menu__button-active");
  selectedCategory = e.target.dataset.name;
  updateDisplayCards();
  closeDropdown(); // Menutup dropdown saat tombol kategori diklik
};

// Fungsi untuk menyortir kartu berdasarkan harga
const sortCards = (order) => {
  const cardsArray = Array.from(menuFilterCard);
  cardsArray.sort((a, b) => {
    const priceA = parseFloat(a.dataset.price);
    const priceB = parseFloat(b.dataset.price);
    if (order === "low-to-high") {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });
  const container = document.querySelector(".menu__filtercard");
  cardsArray.forEach((card) => container.appendChild(card));
};

// Fungsi untuk mengubah urutan penyortiran
const toggleSortOrder = (order) => {
  sortOrder = order;
  if (order === "low-to-high") {
    sortLowToHighButton.classList.add("active-sort");
    sortHighToLowButton.classList.remove("active-sort");
  } else {
    sortLowToHighButton.classList.remove("active-sort");
    sortHighToLowButton.classList.add("active-sort");
  }
  sortCards(order);
  closeDropdown(); // Menutup dropdown saat tombol sortir diklik
};

// Fungsi untuk memperbarui tampilan kartu berdasarkan pencarian dan kategori
const updateDisplayCards = () => {
  const searchText = searchInput.value.toLowerCase();
  menuFilterCard.forEach((card) => {
    const cardCategories = card.dataset.name.split(" ");
    const cardText = card.textContent.toLowerCase();
    const matchesCategory =
      selectedCategory === "All" || cardCategories.includes(selectedCategory);
    const matchesSearch = !searchText || cardText.includes(searchText);
    if (matchesCategory && matchesSearch) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
  sortCards(sortOrder);
};

// Fungsi untuk menangani input pencarian
const handleSearchInput = () => {
  updateDisplayCards();
  if (searchInput.value) {
    clearButton.classList.add("show");
  } else {
    clearButton.classList.remove("show");
  }
};

// Fungsi untuk menghapus input pencarian
const clearSearch = () => {
  searchInput.value = "";
  clearButton.classList.remove("show");
  updateDisplayCards();
};

// Event Listeners
menuButton.forEach((button) => button.addEventListener("click", filterCards));
sortLowToHighButton.addEventListener("click", () =>
  toggleSortOrder("low-to-high")
);
sortHighToLowButton.addEventListener("click", () =>
  toggleSortOrder("high-to-low")
);
searchInput.addEventListener("input", handleSearchInput);
clearButton.addEventListener("click", clearSearch);

// Pastikan dropdown bisa dibuka kembali
document.querySelector(".menu__dropbtn").addEventListener("click", () => {
  dropdownContent.classList.toggle("hidden");
});
