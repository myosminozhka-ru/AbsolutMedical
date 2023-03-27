console.log(window);
console.log(Swiper);

var popularProductSwiper = new Swiper("#js-popular-product-swiper", {
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
  document.querySelector(
    "#js-popular-product-swiper-acitve-index"
  ).textContent = popularProductSwiper.activeIndex + 1;
  document.querySelector("#js-popular-product-swiper-slides").textContent =
    popularProductSwiper.slides.length;
};
popularProductSwiper.on("slideChange", updatePopelarProductSwiper);
updatePopelarProductSwiper();

var brandsSwiper = new Swiper("#js-brand-swiper", {
  slidesPerView: 5,
  navigation: {
    prevEl: "#js-brand-slider-swiper-next-el",
    nextEl: "#js-brand-slider-swiper-prev-el",
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
      slidesPerView: 1.35,
      pagination: {
        el: ".swiper-pagination",
      },
    },
  },
});
const updateBrandsSwiper = () => {
  document.querySelector("#js-brand-swiper-active-slide-index").textContent =
    brandsSwiper.activeIndex + 1;
  document.querySelector("#js-brand-swiper-active-slides-count").textContent =
    brandsSwiper.slides.length;
};
brandsSwiper.on("slideChange", updateBrandsSwiper);
updateBrandsSwiper();

var articlesSwiper = new Swiper("#js-articles-slider-swiper", {
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
  document.querySelector("#js-articles-slider-active-index").textContent =
    articlesSwiper.activeIndex + 1;
  document.querySelector("#js-articles-slider-slides-count").textContent =
    articlesSwiper.slides.length;
};
articlesSwiper.on("slideChange", updateArticlesSwiper);
updateArticlesSwiper();

var swiper = new Swiper("#popular-category__slider", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper("#js-best-deals", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const advantagesTabItems = document.querySelectorAll(
  ".advantages__first-tab-content"
);
const tabs = document.querySelectorAll(".advantages__tab-item");

const setActiveTabItem = (id = 0) => {
  for (let i = 0; i < advantagesTabItems.length; i++) {
    if (i === id) {
      advantagesTabItems[i].style.display = "block";
      tabs[i].classList.add("--blue");
      tabs[i].classList.remove("--gray");
    } else {
      advantagesTabItems[i].style.display = "none";
      tabs[i].classList.add("--gray");
      tabs[i].classList.remove("--blue");
    }
  }
};
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    setActiveTabItem(i);
  });
}

setActiveTabItem();

const headerScrollDownButton = document.querySelector(
  "#js-header__scroll-down-button"
);

headerScrollDownButton.addEventListener("click", () => {
  window.scrollBy({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
});

let timerId = null;
const debounceHeaderScrollDownButton = () => {
  headerScrollDownButton.style.visibility = "visible";
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    headerScrollDownButton.style.visibility = "hidden";
  }, 2000);
};

window.addEventListener("scroll", (e) => {
  if (document.body.scrollHeight / 2 > window.scrollY) {
    debounceHeaderScrollDownButton();
  }
});
