document.addEventListener("DOMContentLoaded", function () {
  const productPageCategories = new Swiper("#product-galery", {
    navigation: {
      nextEl: ".product-header__galery-slider-next",
      prevEl: ".product-header__galery-slider-prev",
    },
    slidesPerView: 4,
    spaceBetween: 16,
    breakpoints: {
      1191.98: {
        slidesPerView: 4,
      },
      767.98: {
        slidesPerView: 3,
      },
      575.98: {
        slidesPerView: 4,
      },

      0: {
        slidesPerView: 3,
      },
    },
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
        slidesPerView: 1.2,
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
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    navigation: {
      nextEl: "#js-categories-slider-next-el",
      prevEl: "#js-categories-slider-prev-el",
    },
    breakpoints: {
      767.98: {
        pagination: false,
      },
      0: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    },
  });

  const updateCategoriesSLider = () => {
    const activeIndexes = document.querySelectorAll(
      "#js-categories-slider-active-index"
    );

    if (activeIndexes && activeIndexes.length) {
      for (let i = 0; i < activeIndexes.length; i++) {
        activeIndexes[i].textContent = categoriesSlider.activeIndex + 1;
      }
    }

    const slidesCounts = document.querySelectorAll(
      "#js-categories-slider-slides-count"
    );

    if (slidesCounts && slidesCounts.length) {
      for (let i = 0; i < slidesCounts.length; i++) {
        slidesCounts[i].textContent = categoriesSlider.slides.length;
      }
    }
  };

  categoriesSlider.on("slideChange", function () {
    updateCategoriesSLider();
  });
  updateCategoriesSLider();
});
