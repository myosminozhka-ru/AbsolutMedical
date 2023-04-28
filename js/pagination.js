document.addEventListener("DOMContentLoaded", function () {
  const numbers = [1, 2, 3, 4, 5, 22];
  const prev = document.querySelector(".ui-pagination-prev");
  const next = document.querySelector(".ui-pagination-next");
  const paginationNumbers = document.querySelectorAll(".ui-pagination-number");

  if (prev && next && paginationNumbers && paginationNumbers.length) {
    let activeNumber = 1;

    const setNumbers = function () {};

    const fetchPrev = function () {};

    const fetchNext = function () {};

    const fetchPageById = async function (id) {
      try {
        const response = await 1;
        setNumbers(id);
      } catch (e) {
        console.error("error fetching page");
      }
    };

    if (prev && next && paginationNumbers) {
      prev.addEventListener("click", function () {
        fetchPrev();
      });

      next.addEventListener("click", function () {
        fetchNext();
      });

      for (let i = 1; i < paginationNumbers.length; i++) {
        paginationNumbers[i].addEventListener("click", function () {
          fetchPageById(i);
        });
      }
    }
  }
});
