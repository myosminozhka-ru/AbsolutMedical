document.addEventListener("DOMContentLoaded", function () {
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
});
