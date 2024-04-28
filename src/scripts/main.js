import { gsap } from "gsap";
import SplitType from "split-type";

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
  const currentPage = window.location.pathname.split("/").pop();
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

function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;
    let delay = Math.floor(Math.random() * 200 + 50);
    setTimeout(updateCounter, delay);
  }
  updateCounter();

  let loader = document.querySelector(".loader-overlay");
  let loaderAnimation = document.querySelector(".loader-animation");
  let bars = document.querySelectorAll(".loader-overlay .bar");
  const text = new SplitType("h1");
  const textOverlay = new SplitType(".overlay");
  const carImgs = document.querySelectorAll(".img-wrapper");

  const tl = gsap.timeline();
  tl.set(bars, {
    transformOrigin: "100% 100%",
    scaleY: 1,
  });

  tl.to(".counter", 0.25, {
    delay: 3.5,
    height: 0,
    stagger: {
      amount: 0.5,
    },
    ease: "power4.inOut",
  });

  tl.to(loaderAnimation, {
    yPercent: 150,
    duration: 0.5,
    delay: 0.3,
    ease: "power3.out",
    display: "none",
  });

  tl.add([
    gsap.to(bars, 0.5, {
      scaleY: 0,
      transformOrigin: "100% 100%",
      stagger: 0.08,
      ease: "power3.out",
      onComplete: function () {
        const loaderWrapper = document.querySelector(".loader");
        loaderWrapper.style.display = "none";
      },
    }),
    gsap.to(".overlay .char", {
      y: 0,
      stagger: 0.03,
      duration: 0.01,
      delay: 0.08,
    }),
    gsap.to("h1 .char", {
      y: 0,
      stagger: 0.03,
      duration: 0.01,
      delay: 0.08,
    }),
  ]);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    startLoader();
  }, 1000);
});

// gsap.registerPlugin(ScrollTrigger);
// gsap.from(".about-card", {
//   x: -100,
//   scrollTrigger: {
//     trigger: ".about-card",
//     start: "top += 100", // When the top of the element hits the center of the viewport
//     end: "bottom", // When the bottom of the element hits the center of the viewport
//     scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//   },
// });
