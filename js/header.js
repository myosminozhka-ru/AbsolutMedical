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
  controls[i].addEventListener("click", () => {
    handleClickControlsItem(i);
  });
  controls[0].classList.add("--active");
  menuContents[0].classList.add("--active");
}

const secondLevelCrossButton = document.querySelector(
  ".main-menu__content-button"
);
secondLevelCrossButton.addEventListener("click", () => {
  mainMenuContentContainer.classList.remove("--active");
});

const backBackButton = document.querySelector("#js-header-info__callback");
const headerPopup = document.querySelector("#js-header-callback-popup");
const headerPopupCloseButton = document.querySelector(
  "#js-header-callback-popup-close-button"
);
backBackButton.addEventListener("click", () => {
  headerPopup.classList.add("--active");
});
headerPopupCloseButton.addEventListener("click", () => {
  headerPopup.classList.remove("--active");
});
