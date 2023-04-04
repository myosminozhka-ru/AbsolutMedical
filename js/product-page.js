document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#product-galery", {
    navigation: {
      nextEl: ".product-header__galery-slider-next",
      prevEl: ".product-header__galery-slider-prev",
    },
    slidesPerView: 3,
    spaceBetween: 30,
  });
});
