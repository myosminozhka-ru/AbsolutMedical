document.addEventListener("DOMContentLoaded", function () {
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
});
