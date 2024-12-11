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

// ScrollReveal().reveal(".store__data", {
//   ...scrollRevealOption,
//   origin: "top",
//   interval: 100,
// });

/*==================== STORE FILTER AND SORT ====================*/
const storeFilterButton = document.querySelectorAll(
  ".store__filter__options button"
);
const storeFilterCard = document.querySelectorAll(
  ".store__filter__card .store__card"
);
const storeSearchInput = document.getElementById("storeSearchInput");
const clearButtonStore = document.getElementById("storeClearButton"); // Tetap menggunakan 'clearButtonStore'
const sortAToZButton = document.getElementById("sortAToZ");
const sortZToAButton = document.getElementById("sortZToA");
const dropBtnStore = document.getElementById("storeDropBtn");
const dropdownContentStore = document.getElementById("storeDropdownContent");
let selectedCategoryStore = "all";

// Fungsi untuk menyaring kartu berdasarkan kategori
const filterCardsStore = (e) => {
  document.querySelector(".store__button")?.classList.remove("store__button");
  e.target.classList.add("store__button");
  selectedCategoryStore = e.target.dataset.name;
  updateDisplayCardsStore();
};

// Fungsi untuk menyortir kartu secara alfabetis
const sortCardsStore = (order) => {
  const cardsArrayStore = Array.from(storeFilterCard);
  cardsArrayStore.sort((a, b) => {
    const nameA = a
      .querySelector(".store__card__detail h5")
      .textContent.toLowerCase();
    const nameB = b
      .querySelector(".store__card__detail h5")
      .textContent.toLowerCase();
    if (order === "A-Z") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });
  const containerStore = document.querySelector(".store__filter__card");
  cardsArrayStore.forEach((card) => containerStore.appendChild(card));
};

// Fungsi untuk memperbarui tampilan kartu berdasarkan pencarian dan kategori
const updateDisplayCardsStore = () => {
  const searchTextStore = storeSearchInput.value.toLowerCase();
  storeFilterCard.forEach((card) => {
    const cardCategoryStore = card.dataset.name.toLowerCase();
    const cardTextStore = card.textContent.toLowerCase();
    const matchesCategoryStore =
      selectedCategoryStore === "all" ||
      cardCategoryStore.includes(selectedCategoryStore.toLowerCase());
    const matchesSearchStore =
      !searchTextStore || cardTextStore.includes(searchTextStore);
    if (matchesCategoryStore && matchesSearchStore) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
  sortCardsStore(
    sortAToZButton.classList.contains("active-sort") ? "A-Z" : "Z-A"
  );
};

// Fungsi untuk menangani input pencarian
const handleSearchInputStore = () => {
  updateDisplayCardsStore();
  if (storeSearchInput.value) {
    clearButtonStore.classList.add("show");
  } else {
    clearButtonStore.classList.remove("show");
  }
};

// Fungsi untuk menghapus input pencarian
const clearSearchStore = () => {
  storeSearchInput.value = "";
  clearButtonStore.classList.remove("show");
  updateDisplayCardsStore();
};

// Fungsi untuk mengubah urutan penyortiran
const toggleSortOrderStore = (order) => {
  if (order === "A-Z") {
    sortAToZButton.classList.add("active-sort");
    sortZToAButton.classList.remove("active-sort");
  } else {
    sortAToZButton.classList.remove("active-sort");
    sortZToAButton.classList.add("active-sort");
  }
  sortCardsStore(order);
};

// Fungsi untuk menutup dropdown
const closeDropdownStore = () => {
  dropdownContentStore.classList.add("store__hidden");
};

// Fungsi untuk membuka dropdown
const openDropdownStore = () => {
  dropdownContentStore.classList.toggle("store__hidden");
};

// Event Listeners
storeFilterButton.forEach((button) =>
  button.addEventListener("click", filterCardsStore)
);
storeSearchInput.addEventListener("input", handleSearchInputStore);
clearButtonStore.addEventListener("click", clearSearchStore);
sortAToZButton.addEventListener("click", () => toggleSortOrderStore("A-Z"));
sortZToAButton.addEventListener("click", () => toggleSortOrderStore("Z-A"));
dropBtnStore.addEventListener("click", openDropdownStore);

// Inisialisasi awal
updateDisplayCardsStore();
