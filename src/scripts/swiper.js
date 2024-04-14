import { gsap } from "gsap";
import SplitType from "split-type";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const swiper = new Swiper(".swiper-portfolio", {
  slidesPerView: "auto",
  modules: [Pagination],
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const carousel = new Swiper(".carousel", {
  spaceBetween: 40,
  slidesPerView: "1",
  modules: [Autoplay],
  loop: true,
  autoplay: { delay: 3000 },
  speed: 700,
});

const itemsCarousel = new Swiper(".itemsCarousel", {
  slidesPerView: "auto",
  spaceBetween: 20,
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const membersCarousel = new Swiper(".board-members", {
  slidesPerView: "auto",
  spaceBetween: 20,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
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
      y: 0,
      ease: "power2.out",
      filter: "blur(0px)",
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
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
});
