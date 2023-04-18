document.addEventListener("DOMContentLoaded", function () {
  const partnerSteps = new Swiper("#js-parnter-steps-slider", {
    // pagination: {
    //   el: ".swiper-pagination",
    // },
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
      console.log("skldf");
      return;
    }

    const companyDocuments = document.querySelector(".company-documents");
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
});
