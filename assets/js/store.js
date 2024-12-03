// STORE PAGE UPDATE
const storeFilterButton = document.querySelectorAll(
  ".store__filter__options button"
);
const storeFilterCard = document.querySelectorAll(
  ".store__filter__card .store__card"
);
const storeSearchInput = document.getElementById("storeSearchInput");
const clearButton = document.getElementById("storeClearButton");
const sortAToZButton = document.getElementById("sortAToZ");
const sortZToAButton = document.getElementById("sortZToA");
const dropBtn = document.getElementById("storeDropBtn");
const dropdownContent = document.getElementById("storeDropdownContent");
let selectedCategory = "all";

// Fungsi untuk menyaring kartu berdasarkan kategori
const filterCards = (e) => {
  document.querySelector(".store__button")?.classList.remove("store__button");
  e.target.classList.add("store__button");
  selectedCategory = e.target.dataset.name;
  updateDisplayCards();
};

// Fungsi untuk menyortir kartu secara alfabetis
const sortCards = (order) => {
  const cardsArray = Array.from(storeFilterCard);
  cardsArray.sort((a, b) => {
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
  const container = document.querySelector(".store__filter__card");
  cardsArray.forEach((card) => container.appendChild(card));
};

// Fungsi untuk memperbarui tampilan kartu berdasarkan pencarian dan kategori
const updateDisplayCards = () => {
  const searchText = storeSearchInput.value.toLowerCase();
  storeFilterCard.forEach((card) => {
    const cardCategory = card.dataset.name.toLowerCase();
    const cardText = card.textContent.toLowerCase();
    const matchesCategory =
      selectedCategory === "all" ||
      cardCategory.includes(selectedCategory.toLowerCase());
    const matchesSearch = !searchText || cardText.includes(searchText);
    if (matchesCategory && matchesSearch) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
  sortCards(sortAToZButton.classList.contains("active-sort") ? "A-Z" : "Z-A");
};

// Fungsi untuk menangani input pencarian
const handleSearchInput = () => {
  updateDisplayCards();
  if (storeSearchInput.value) {
    clearButton.classList.add("show");
  } else {
    clearButton.classList.remove("show");
  }
};

// Fungsi untuk menghapus input pencarian
const clearSearch = () => {
  storeSearchInput.value = "";
  clearButton.classList.remove("show");
  updateDisplayCards();
};

// Fungsi untuk mengubah urutan penyortiran
const toggleSortOrder = (order) => {
  if (order === "A-Z") {
    sortAToZButton.classList.add("active-sort");
    sortZToAButton.classList.remove("active-sort");
  } else {
    sortAToZButton.classList.remove("active-sort");
    sortZToAButton.classList.add("active-sort");
  }
  sortCards(order);
};

// Fungsi untuk menutup dropdown
const closeDropdown = () => {
  dropdownContent.classList.add("store__hidden");
};

// Fungsi untuk membuka dropdown
const openDropdown = () => {
  dropdownContent.classList.toggle("store__hidden");
};

// Event Listeners
storeFilterButton.forEach((button) =>
  button.addEventListener("click", filterCards)
);
storeSearchInput.addEventListener("input", handleSearchInput);
clearButton.addEventListener("click", clearSearch);
sortAToZButton.addEventListener("click", () => toggleSortOrder("A-Z"));
sortZToAButton.addEventListener("click", () => toggleSortOrder("Z-A"));
dropBtn.addEventListener("click", openDropdown);

// Inisialisasi awal
// updateDisplayCards();

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
