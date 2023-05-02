document.addEventListener("DOMContentLoaded", function () {
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
    new popup(popups[i][0], popups[i][1]);
  }
});
