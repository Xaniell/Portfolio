const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const backdrop = document.getElementById("backdrop");

// Open menu
toggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  backdrop.classList.add("active");
});

// Close menu
const closeMenu = () => {
  mobileMenu.classList.remove("active");
  backdrop.classList.remove("active");
};

closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);
