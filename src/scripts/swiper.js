import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  modules: [Pagination],
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
