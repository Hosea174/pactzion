import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
  slidesPerView: "1",
  modules: [Autoplay],
  loop: true,
  autoplay: { delay: 2000 },
  speed: 700,
});
