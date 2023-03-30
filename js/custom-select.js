document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".ui-select-wrapper")
    .addEventListener("click", function () {
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
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  });
});
