const menuIcon = document.getElementById("menu-icon");
const crossIcon = document.getElementById("cross-icon");
const mobileNav = document.getElementById("mobile-nav");

const toggleIcon = () => {
  crossIcon.classList.toggle("hidden");
  mobileNav.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
};

menuIcon.addEventListener("click", toggleIcon);
crossIcon.addEventListener("click", toggleIcon);
