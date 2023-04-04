document.addEventListener("DOMContentLoaded", function () {
  const popup = document.querySelector(".ui-popup");
  const popupShowButton = document.querySelector("#js-popup-open-button");
  const popupCloseButton = document.querySelector("#js-popup-close-button");

  if (popup && popupShowButton && popupCloseButton) {
    popupShowButton.addEventListener("click", function () {
      popup.classList.add("--active");
    });
    popupCloseButton.addEventListener("click", function () {
      popup.classList.remove("--active");
    });
  }
});
