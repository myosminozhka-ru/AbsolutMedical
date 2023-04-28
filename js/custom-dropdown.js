document.addEventListener("DOMContentLoaded", function () {
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
});
