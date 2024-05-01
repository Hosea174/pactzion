import { gsap } from "gsap";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

const changanSlider = new Swiper(".changan-models", {
  direction: "horizontal",
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 100,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  on: {
    slideChangeTransitionEnd: changanAnimate,
  },
});

function changanAnimate() {
  const slide = document.querySelector(".model.swiper-slide-active");
  const specsContainerActive = slide.querySelector(".car-specs");
  const modelHeaderActive = slide.querySelector(".hero-header");

  const modelHeaders = document.querySelectorAll(".hero-header");
  modelHeaders.forEach((modelHeader) => {
    gsap.to([modelHeader], {
      duration: 1,
      opacity: 0,
      y: -16,
      ease: "power2.out",
    });
  });
  const specsContainers = document.querySelectorAll(".car-specs");
  specsContainers.forEach((specsContainer) => {
    gsap.to([specsContainer], {
      duration: 0.6,
      opacity: 0,
      y: 16,
      ease: "power2.out",
      filter: "blur(5px)",
    });
  });

  if (slide) {
    gsap.to([modelHeaderActive, specsContainerActive], {
      duration: 1,
      opacity: 1,
      y: -0,
      ease: "power2.out",
      filter: "blur(0px)",
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("changan loaded");
  changanAnimate();
});

const colorVariants = new Swiper(".color-variants", {
  modules: [Pagination, EffectFade],
  effect: "fade",
  fadeEffect: { crossFade: true },
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // nested: true,
  slidesPerView: "auto",
  grabCursor: true,
});

const submitBtns = document.querySelectorAll(".submit-btn");
const modals = document.querySelectorAll(".modal");
const techBtns = document.querySelectorAll(".technical-specs");
var overlay = document.getElementById("overlay");

submitBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");
    window.location.href = "/contact?item=" + value;
  });
});

techBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal-id");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    overlay.style.display = "block";
  });
});

modals.forEach((modal) => {
  const closeBtn = modal.querySelector(".close");
  const modalElement = modal;
  closeBtn.addEventListener("click", () => {
    modalElement.style.display = "none";
    overlay.style.display = "none";
  });
});

overlay.onclick = function () {
  modals.forEach((modal) => {
    const modalElement = modal;
    modalElement.style.display = "none";
  });
  overlay.style.display = "none";
};
