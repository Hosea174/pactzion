import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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