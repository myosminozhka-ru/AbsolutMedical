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
  for (let i = 0; i < selects.length; i++) {
    if (!selects[i].contains(e.target)) {
      selects[i].classList.remove("open");
    }
  }
});
