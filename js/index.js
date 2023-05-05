document.addEventListener("DOMContentLoaded", function () {
  $(function () {
    $('input[name="daterange"]').daterangepicker(
      {
        opens: "left",
      },
      function (start, end, label) {
        console.log(
          "A new date selection was made: " +
            start.format("YYYY-MM-DD") +
            " to " +
            end.format("YYYY-MM-DD")
        );
      }
    );
  });

  const aboutCompanySlider = new Swiper("#js-about-company-slider", {
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var articleSwiper = new Swiper(".articles__swiper", {
    pagination: {
      el: ".swiper-pagination",
      // dynamicBullets: true,
    },
  });

  const articlesTagsShowButton = document.querySelector(
    ".articles__tags-show-button"
  );
  const articlesTags = document.querySelectorAll(".articles__tag");

  if (articlesTagsShowButton && articlesTags && articlesTags.length) {
    articlesTagsShowButton.addEventListener("click", function () {
      articlesTagsShowButton.style.display = "none";
      for (let i = 0; i < articlesTags.length; i++) {
        articlesTags[i].style.display = "block";
      }
    });
  }

  const articlesLeftBlock = document.querySelector(".articles__left-block");

  if (articlesLeftBlock) {
    const resizeObserver = new ResizeObserver((articlesLeftBlock) => {
      const articlesRightBlock = document.querySelector(
        ".articles__right-block"
      );
      if (!articlesLeftBlock || !articlesRightBlock) return;

      const leftBlockHeight = articlesLeftBlock[0].contentRect.height;
      articlesRightBlock.style.height = leftBlockHeight + "px";
    });

    resizeObserver.observe(articlesLeftBlock);
  }

  const passwordEyeButton = document.querySelector("#js-password-button");
  const passwordInput = document.querySelector("#js-password-input");

  if (passwordEyeButton && passwordInput) {
    passwordEyeButton.addEventListener("click", () => {
      if (passwordInput.hasAttribute("type", "password")) {
        passwordInput.removeAttribute("type");
      } else {
        passwordInput.setAttribute("type", "password");
      }
    });
  }

  const partnerSteps = new Swiper("#js-parnter-steps-slider", {
    slidesPerView: 3.8,
    navigation: {
      nextEl: "#js-parnter-steps-button-next",
      prevEl: "#js-partner-steps-button-prev",
    },
    breakpoints: {
      1191.98: {
        slidesPerView: 3.8,
      },
      575.98: {
        slidesPerView: 2.1,
      },

      0: {
        slidesPerView: 1.05,
      },
    },
  });

  const updatePartnerSteps = () => {
    const activeIndex = document.querySelector(
      "#js-partner-slides-active-index"
    );

    if (activeIndex && activeIndex.textContent) {
      activeIndex.textContent = partnerSteps.activeIndex + 1;
    }

    const slidesCount = document.querySelector("#js-partner-slides-count");

    if (slidesCount && slidesCount.textContent) {
      slidesCount.textContent = partnerSteps.slides.length;
    }
  };

  partnerSteps.on("slideChange", updatePartnerSteps);
  updatePartnerSteps();

  setTimeout(() => {
    if (window.innerWidth < 991.98) {
      return;
    }

    const companyDocuments = document.querySelector(".company-documents");
    if (!companyDocuments) return;

    const tabsContainer = companyDocuments.querySelector(
      ".company-documents__tabs"
    );

    const tabsShowButton = companyDocuments.querySelector(
      ".company-documents__tab-open-button"
    );

    function isOverflown(parent, child) {
      return (
        child.getBoundingClientRect().top <
        parent.getBoundingClientRect().height
      );
    }

    if (companyDocuments && tabsContainer && tabsShowButton) {
      const tabsList = tabsContainer.querySelectorAll(
        ".company-documents__tab"
      );

      tabsShowButton.addEventListener("click", function () {
        for (let i = 0; i < tabsList.length; i++) {
          tabsList[i].style.display = "block";
        }
        tabsShowButton.style.display = "none";
      });

      tabsShowButton.style.display = "block";

      const documentsClientRect = companyDocuments.getBoundingClientRect();
      const tabsClientRect = tabsContainer.getBoundingClientRect();

      tabsContainer.style.width =
        documentsClientRect.height - tabsContainer.offsetTop * 2 + "px";

      if (tabsClientRect.height > documentsClientRect.height) {
        if (tabsList && tabsList.length) {
          for (let i = 0; i < tabsList.length; i++) {
            console.log(isOverflown(tabsContainer, tabsList[i]));

            if (!isOverflown(tabsContainer, tabsList[i])) {
              tabsList[i].style.display = "none";
            }

            if (
              !isOverflown(tabsContainer, tabsList[i]) &&
              isOverflown(tabsContainer, tabsList[i - 1])
            ) {
              tabsList[i - 1].style.display = "none";
            }
          }
        }
      }
    }
  });

  const uiPopup = document.querySelector(".ui-popup");
  const popupShowButton = document.querySelector("#js-popup-open-button");
  const popupCloseButton = document.querySelector("#js-popup-close-button");

  if (uiPopup && popupShowButton && popupCloseButton) {
    popupShowButton.addEventListener("click", function () {
      uiPopup.classList.add("--active");
    });
    popupCloseButton.addEventListener("click", function () {
      uiPopup.classList.remove("--active");
    });
  }

  const searchebleDropwDown = function SearchebleDropdown(element) {
    this.el = element;
    this.open = false;
    this.dropdownButton = this.el.querySelector(
      ".ui-searchable-dropdown-header"
    );
    this.searchInput = this.el.querySelector(".ui-searcheble-dropdown-input");
    this.dataList = this.el.querySelectorAll(
      ".ui-searchable-dropdown-list-item"
    );

    this.toggleActiveClass = () => {
      this.el.classList.toggle("--open");
    };

    this.checkElemContains = (target) => {
      return this.el.contains(target);
    };

    this.clickOutside = (e) => {
      if (!this.checkElemContains(e.target)) {
        this.open = false;
        this.toggleActiveClass();
        document.removeEventListener("click", this.clickOutside);
      }
    };

    this.el.addEventListener("click", (e) => {
      if (!this.open) {
        this.open = true;
        this.toggleActiveClass();
        document.addEventListener("click", this.clickOutside);
      } else if (this.open && e.target === this.dropdownButton) {
        this.open = false;
        this.toggleActiveClass();
      }
    });

    this.searchInput.addEventListener("input", (e) => {
      if (e.target.value.length > 1) {
        const searchText = e.target.value.toLowerCase();

        for (let i = 0; i < this.dataList.length; i++) {
          const dataListText = this.dataList[i].querySelector(
            ".custom-checkbox__text"
          ).textContent;

          if (dataListText.toLowerCase().includes(searchText)) {
            this.dataList[i].style.display = "block";
          } else {
            this.dataList[i].style.display = "none";
          }
        }
      } else if (e.target.value.length === 0) {
        for (let i = 0; i < this.dataList.length; i++) {
          this.dataList[i].style.display = "block";
        }
      }
    });
  };

  const searchebleDropwDowns = document.querySelectorAll(
    ".ui-searchable-dropdown"
  );

  for (let i = 0; i < searchebleDropwDowns.length; i++) {
    new searchebleDropwDown(searchebleDropwDowns[i]);
  }

  // default dropdown ===================================

  const dropwDown = function Dropdown(element) {
    this.el = element;
    this.open = false;
    this.dropdownButton = this.el.querySelector(".ui-dropdown-header");

    this.toggleActiveClass = () => {
      this.el.classList.toggle("--open");
    };

    this.checkElemContains = (target) => {
      return this.el.contains(target);
    };

    this.clickOutside = (e) => {
      if (!this.checkElemContains(e.target)) {
        this.open = false;
        this.toggleActiveClass();
        document.removeEventListener("click", this.clickOutside);
      }
    };

    this.el.addEventListener("click", (e) => {
      if (!this.open) {
        this.open = true;
        this.toggleActiveClass();
        document.addEventListener("click", this.clickOutside);
      } else if (this.open && e.target === this.dropdownButton) {
        this.open = false;
        this.toggleActiveClass();
      }
    });
  };

  const dropwDowns = document.querySelectorAll(".ui-dropdown");

  for (let i = 0; i < dropwDowns.length; i++) {
    new dropwDown(dropwDowns[i]);
  }

  document
    .querySelector(".ui-select-wrapper")
    ?.addEventListener("click", function () {
      this.querySelector(".ui-select").classList.toggle("open");
    });

  for (const option of document.querySelectorAll(".ui-custom-option")) {
    option.addEventListener("click", function () {
      if (!this.classList.contains("ui-selected")) {
        this.parentNode
          .querySelector(".ui-custom-option.ui-selected")
          .classList.remove("ui-selected");
        this.classList.add("ui-selected");
        this.closest(".ui-select").querySelector(
          ".ui-select__trigger span"
        ).textContent = this.textContent;
      }
    });
  }

  window.addEventListener("click", function (e) {
    const select = document.querySelector(".ui-select");
    if (select) {
      if (!select.contains(e.target)) {
        select.classList.remove("open");
      }
    }
  });

  const burger = document.querySelector(".header-main__burger");

  const mainMenu = document.querySelector(".main-menu");
  burger.addEventListener("click", () => {
    mainMenu.classList.add("--active");
  });

  const mainMenuCloseButton = document.querySelector(
    ".main-menu__controls-button"
  );
  mainMenuCloseButton.addEventListener("click", () => {
    mainMenu.classList.remove("--active");
  });
  // burger------------------------

  const controls = document
    .querySelector("#js-main-menu-controls")
    .querySelectorAll(".main-menu__item");
  const menuContents = document.querySelectorAll(".main-menu__second-level");
  const mainMenuContentContainer = document.querySelector(
    ".main-menu__content-container"
  );

  const brakePoint = 767.98;

  const handleClickControlsItem = (idx) => {
    const windowWidth = window.innerWidth;
    for (let i = 0; i < controls.length; i++) {
      if (idx === i) {
        controls[i].classList.add("--active");
        menuContents[i].classList.add("--active");
      } else {
        controls[i].classList.remove("--active");
        menuContents[i].classList.remove("--active");
      }
    }
    console.log(brakePoint);
    console.log(windowWidth);

    if (brakePoint > windowWidth) {
      console.log(mainMenuContentContainer);
      mainMenuContentContainer.classList.add("--active");
    }
  };

  for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener("click", function () {
      handleClickControlsItem(i);
    });
    controls[0].classList.add("--active");
    menuContents[0].classList.add("--active");
  }

  const secondLevelCrossButton = document.querySelector(
    ".main-menu__content-button"
  );
  secondLevelCrossButton.addEventListener("click", function () {
    mainMenuContentContainer.classList.remove("--active");
  });

  const backBackButton = document.querySelector("#js-header-info__callback");
  const headerPopup = document.querySelector("#js-header-callback-popup");
  const headerPopupCloseButton = document.querySelector(
    "#js-header-callback-popup-close-button"
  );
  backBackButton.addEventListener("click", function () {
    headerPopup.classList.add("--active");
  });
  headerPopupCloseButton.addEventListener("click", function () {
    headerPopup.classList.remove("--active");
  });

  const productSearcherClearButton = document.querySelector(
    "#js-header-product-searcher-clear-button"
  );

  const productSearcherInput = document.querySelector(
    "#js-header-product-searcher-input"
  );

  productSearcherClearButton.addEventListener("click", function () {
    productSearcherInput.value = "";
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

  const brandsSwiper = new Swiper("#js-brand-swiper", {
    slidesPerView: 5,
    navigation: {
      prevEl: "#js-brand-slider-swiper-next-el",
      nextEl: "#js-brand-slider-swiper-prev-el",
    },
    breakpoints: {
      991.98: {
        slidesPerView: 5,
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

  const updateBrandsSwiper = () => {
    const activeIndex = document.querySelector(
      "#js-brand-swiper-active-slide-index"
    );

    if (activeIndex && activeIndex.textContent) {
      activeIndex.textContent = brandsSwiper.activeIndex + 1;
    }

    const slides = document.querySelector(
      "#js-brand-swiper-active-slides-count"
    );
    if (slides && slides.textContent) {
      slides.textContent = brandsSwiper.slides.length;
    }
  };
  brandsSwiper.on("slideChange", updateBrandsSwiper);
  updateBrandsSwiper();

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

  const popularCategorySwiper = new Swiper("#popular-category__slider", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const bestDealsSwiper = new Swiper("#js-best-deals", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const advantagesTabItems = document.querySelectorAll(
    ".advantages__first-tab-content"
  );
  const tabs = document.querySelectorAll(".advantages__tab-item");

  const setActiveTabItem = (id = 0) => {
    if (advantagesTabItems && advantagesTabItems.length) {
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
    }
  };

  if (tabs && tabs.length) {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", () => {
        setActiveTabItem(i);
      });
    }
  }

  setActiveTabItem();

  const headerScrollDownButton = document.querySelector(
    "#js-header__scroll-down-button"
  );

  if (headerScrollDownButton) {
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
  }

  const menuItems = document
    .querySelector("#js-page-main-menu")

    ?.querySelectorAll(".page-main-menu__item");

  if (menuItems && menuItems.length) {
    const setActiveMenuItem = (idx) => {
      for (let i = 0; i < menuItems.length; i++) {
        if (i === idx) {
          menuItems[i].classList.add("--active");
        } else {
          menuItems[i].classList.remove("--active");
        }
      }
    };

    if (menuItems) {
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function () {
          setActiveMenuItem(i);
        });
      }
    }

    setActiveMenuItem(0);
  }

  // pagination ================
  const numbers = [1, 2, 3, 4, 5, 22];
  const prev = document.querySelector(".ui-pagination-prev");
  const next = document.querySelector(".ui-pagination-next");
  const paginationNumbers = document.querySelectorAll(".ui-pagination-number");

  if (prev && next && paginationNumbers && paginationNumbers.length) {
    let activeNumber = 1;

    const setNumbers = function () {};

    const fetchPrev = function () {};

    const fetchNext = function () {};

    const fetchPageById = async function (id) {
      try {
        const response = await 1;
        setNumbers(id);
      } catch (e) {
        console.error("error fetching page");
      }
    };

    if (prev && next && paginationNumbers) {
      prev.addEventListener("click", function () {
        fetchPrev();
      });

      next.addEventListener("click", function () {
        fetchNext();
      });

      for (let i = 1; i < paginationNumbers.length; i++) {
        paginationNumbers[i].addEventListener("click", function () {
          fetchPageById(i);
        });
      }
    }
  }
  // pagination ================

  // steps ===================

  let counter = 0;

  let intervalId = null;

  const passwordCodeResendButton = document.querySelector(
    "#js-password-code-resend-button"
  );
  const passwordSecondStepSubmitButton = document.querySelector(
    "#js-second-step-button"
  );

  if (passwordCodeResendButton && passwordSecondStepSubmitButton) {
    const startTimer = (duration, display) => {
      let timer = duration,
        minutes,
        seconds;

      const intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          timer = "00:00";
          clearInterval(intervalId);
          passwordCodeResendButton.classList.remove("--disabled");
        }
      }, 1000);
    };

    const initializeTimer = () => {
      let oneMinute = 59,
        display = document.querySelector("#js-timer");
      passwordCodeResendButton.classList.add("--disabled");

      startTimer(oneMinute, display);
    };

    passwordCodeResendButton.addEventListener("click", () => {
      if (intervalId) return;
      initializeTimer();
    });
  }

  // steps ==============================

  const steps = [
    ...document.querySelectorAll(
      "#js-first-step, #js-second-step, #js-third-step"
    ),
  ];

  const stepsButton = [
    ...document.querySelectorAll(
      "#js-first-step-button, #js-second-step-button, #js-third-step-button"
    ),
  ];

  const sleep = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  const stepsVisibilityChanger = (id) => {
    if (id === 1) {
      initializeTimer();
    }

    if (id >= steps.length) return;

    steps.forEach((step, stepId) => {
      if (stepId === id) {
        step.style.display = "block";
      } else {
        step.style.display = "none";
      }
    });
  };

  const fetch = async () => {
    return await sleep();
  };

  stepsButton.forEach((el, idx) => {
    el.addEventListener("click", async () => {
      await fetch();
      stepsVisibilityChanger(idx + 1);
    });
  });

  stepsVisibilityChanger(0);

  // popup ===========================
  const popup = function Popup(el, triggerButton) {
    this.el = el;
    this.triggerButton = triggerButton;
    this.open = false;

    this.closeButton = this.el.querySelector(".ui-popup-close-button");

    this.toggleActiveClass = () => {
      this.el.classList.toggle("--active");
    };

    this.clickOutside = (e) => {
      if (!this.checkElemContains(e.target)) {
        this.open = false;
        this.toggleActiveClass();
        document.removeEventListener("click", this.clickOutside);
      }
    };

    this.checkElemContains = (target) => {
      return this.el.contains(target);
    };

    this.triggerButton.addEventListener("click", () => {
      this.open = true;
      this.toggleActiveClass();
    });

    this.closeButton.addEventListener("click", () => {
      this.open = false;
      this.toggleActiveClass();
    });
  };

  const jsLkPopup = document.querySelector(".js-lk-popup");
  const jsLkPopupTrigger = document.querySelector(".js-lk-popup-trigger");

  const popups = [[jsLkPopup, jsLkPopupTrigger]];

  for (let i = 0; i < popups.length; i++) {
    if (popups[i][0] && popups[i][1]) {
      new popup(popups[i][0], popups[i][1]);
    }
  }

  // popup ===========================

  const productCategoriesFiltersOpenButton = document.querySelector(
    "#js-product-categories-filters-open-button"
  );

  const filters = document.querySelector(".product-categories-filters-shadow");

  const productCategoriesCloseButton = document.querySelector(
    "#js-product-categories-filters-close-button"
  );

  if (
    filters &&
    productCategoriesCloseButton &&
    productCategoriesFiltersOpenButton
  ) {
    productCategoriesCloseButton.addEventListener("click", function () {
      filters.classList.remove("--active");
    });

    productCategoriesFiltersOpenButton.addEventListener("click", function () {
      filters.classList.add("--active");
    });
  }

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

  const phoneInput = document.getElementById("js-phone-number");
  if (phoneInput) {
    IMask(phoneInput, {
      mask: "+{7}(000)000-00-00",
    });
  }

  const registrationForm = document.querySelector("#js-registration-form");
  const registrationApproved = document.querySelector(
    "#js-registration-approved"
  );
  const formSubmitButton = document.querySelector(
    "#js-registration-submit-button"
  );

  if (registrationForm && registrationApproved && formSubmitButton) {
    formSubmitButton.addEventListener("click", async function (e) {
      await sleep();

      registrationForm.classList.add("--hidden");
      registrationApproved.classList.remove("--hidden");
    });
  }

  const selects = document.querySelectorAll(".select-wrapper");
  for (let i = 0; i < selects.length; i++) {
    selects[i].addEventListener("click", function (e) {
      const target = this.querySelector(".select");
      target.classList.toggle("open");
    });
  }

  for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener("click", function () {
      if (!this.classList.contains("selected")) {
        this.parentNode
          .querySelector(".custom-option.selected")
          .classList.remove("selected");
        this.classList.add("selected");
        this.closest(".select").querySelector(
          ".select__trigger span"
        ).textContent = this.textContent;
      }
    });
  }

  window.addEventListener("click", function (e) {
    const selects = document.querySelectorAll(".select");
    if (selects && selects.length) {
      for (let i = 0; i < selects.length; i++) {
        if (!selects[i].contains(e.target)) {
          selects[i].classList.remove("open");
        }
      }
    }
  });

  const tableCollapseButtons = document.querySelectorAll(
    ".js-ui-table-collapse-button"
  );

  if (tableCollapseButtons && tableCollapseButtons.length) {
    for (let i = 0; i < tableCollapseButtons.length; i++) {
      tableCollapseButtons[i].addEventListener("click", function (e) {
        const button = e.target;
        const parent = e.target.closest(".ui-table-collapse-parent");
        const child = parent.nextElementSibling;
        const isChildFinded =
          child && child.classList.contains("ui-table-collapse-child");

        if (!isChildFinded) return;

        if (button.classList.contains("--active")) {
          button.classList.remove("--active");
          child.classList.remove("--open");
        } else {
          button.classList.add("--active");
          child.classList.add("--open");
        }
      });
    }
  }

  const allTabsInPage = document.querySelectorAll(".ui-tabs-container");

  const setActiveTab = (tab, idx) => {
    const tabsContainer = tab.closest(".ui-tabs-container");
    if (tabsContainer) {
      const tabs = tabsContainer.querySelectorAll(".ui-tabs-control");
      const tabItems = tabsContainer.querySelectorAll(".ui-tabs-item");

      if (tabs && tabs.length && tabItems && tabItems.length)
        for (let i = 0; i < tabs.length; i++) {
          if (i === idx) {
            tabs[i].classList.add("--active");
            tabItems[i].classList.add("--active");
          } else {
            tabs[i].classList.remove("--active");
            tabItems[i].classList.remove("--active");
          }
        }
    }
  };

  if (allTabsInPage && allTabsInPage.length) {
    for (let i = 0; i < allTabsInPage.length; i++) {
      let tabs = allTabsInPage[i].querySelectorAll(".ui-tabs-control");

      for (let j = 0; j < tabs.length; j++) {
        tabs[j].addEventListener("click", function () {
          setActiveTab(tabs[j], j);
        });

        if (j === 0) {
          setActiveTab(tabs[j], j);
        }
      }
    }
  }
});
