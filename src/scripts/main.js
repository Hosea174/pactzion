const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".navbar a");

allEventListners();

function allEventListners() {
  navToggler.addEventListener("click", togglerClick);
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop(); // Get the current page
  console.log("currentPage: ");
  console.log(currentPage);
  const links = document.querySelectorAll("nav li a");
  links.forEach((link) => {
    const linkPage = link.getAttribute("data-page");
    if (currentPage === linkPage) {
      link.classList.add("active");
    }
  });
});

var copy = document.querySelector(".logos-slider-wrapper").cloneNode(true);
document.querySelector(".partners-logo").appendChild(copy);
