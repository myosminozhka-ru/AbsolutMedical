document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#js-about-company-slider", {
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
