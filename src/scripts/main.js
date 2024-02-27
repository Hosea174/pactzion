import { gsap } from "gsap";
import SplitType from "split-type";

const text = new SplitType("h1");
const textOverlay = new SplitType(".overlay");
const tl = gsap.timeline();

gsap.to(".overlay .char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1,
});

gsap.to("h1 .char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1,
});

const imgs = document.querySelectorAll(".img-wrapper");
gsap.from(imgs, {
  y: -10,
  delay: 0.6,
});

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
