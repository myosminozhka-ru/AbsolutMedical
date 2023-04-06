document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#product-galery", {
    navigation: {
      nextEl: ".product-header__galery-slider-next",
      prevEl: ".product-header__galery-slider-prev",
    },
    slidesPerView: 4,
    spaceBetween: 16,
  });

  const popularProductSwiper = new Swiper("#js-popular-product-swiper", {
    slidesPerView: 3,
    spaceBetween: 22,
    navigation: {
      nextEl: "#js-popular-product-swiper-next-el",
      prevEl: "#js-popular-product-swiper-prev-el",
    },
    breakpoints: {
      991.98: {
        slidesPerView: 3,
      },
      767.98: {
        slidesPerView: 2,
      },
      575.98: {
        slidesPerView: 2,
        pagination: false,
      },

      0: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    },
  });
  const updatePopelarProductSwiper = () => {
    const activeIndex = document.querySelector(
      "#js-popular-product-swiper-acitve-index"
    );
    if (activeIndex && activeIndex.textContent) {
      activeIndex.textContent = popularProductSwiper.activeIndex + 1;
    }

    const popularSwiperSlides = document.querySelector(
      "#js-popular-product-swiper-slides"
    );

    if (popularSwiperSlides && popularSwiperSlides.textContent) {
      popularSwiperSlides.textContent = popularProductSwiper.slides.length;
    }
  };

  popularProductSwiper.on("slideChange", updatePopelarProductSwiper);
  updatePopelarProductSwiper();

  const articlesSwiper = new Swiper("#js-articles-slider-swiper", {
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
      nextEl: "#js-articles-slider-next-el",
      prevEl: "#js-articles-slider-prev-el",
    },

    breakpoints: {
      1199.98: {
        slidesPerView: 4,
        pagination: {
          el: "#js-articles-slider-pagination",
          type: "fraction",
        },
      },
      991.98: {
        slidesPerView: 3,
      },
      767.98: {
        slidesPerView: 3,
      },
      575.98: {
        slidesPerView: 2,
        pagination: false,
      },

      0: {
        slidesPerView: 1.35,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    },
  });

  const updateArticlesSwiper = () => {
    const activeIndex = document.querySelector(
      "#js-articles-slider-active-index"
    );
    if (activeIndex && activeIndex.textContent) {
      activeIndex.textContent = articlesSwiper.activeIndex + 1;
    }
    const slides = document.querySelector("#js-articles-slider-slides-count");
    if (slides && slides.textContent) {
      slides.textContent = articlesSwiper.slides.length;
    }
  };
  articlesSwiper.on("slideChange", updateArticlesSwiper);
  updateArticlesSwiper();

  const categoriesSlider = new Swiper("#js-categories-slider", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
