const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// STORE PAGE UPDATE
const storeFilterButton = document.querySelectorAll(
  ".store-filter-options button"
);
const storeFilterCard = document.querySelectorAll(
  ".store-filter-card .store-card"
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
  document.querySelector(".store-button")?.classList.remove("store-button");
  e.target.classList.add("store-button");
  selectedCategory = e.target.dataset.name;
  updateDisplayCards();
};

// Fungsi untuk menyortir kartu secara alfabetis
const sortCards = (order) => {
  const cardsArray = Array.from(storeFilterCard);
  cardsArray.sort((a, b) => {
    const nameA = a
      .querySelector(".store-card-detail h5")
      .textContent.toLowerCase();
    const nameB = b
      .querySelector(".store-card-detail h5")
      .textContent.toLowerCase();
    if (order === "A-Z") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });
  const container = document.querySelector(".store-filter-card");
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
  dropdownContent.classList.add("store-hidden");
};

// Fungsi untuk membuka dropdown
const openDropdown = () => {
  dropdownContent.classList.toggle("store-hidden");
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

// // Inisialisasi awal
// updateDisplayCards();
