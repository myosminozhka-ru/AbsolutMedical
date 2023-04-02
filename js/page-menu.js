document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document
    .querySelector("#js-page-main-menu")
    .querySelectorAll(".page-main-menu__item");

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
});
