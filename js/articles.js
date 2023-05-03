document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".articles__swiper", {
    pagination: {
      el: ".swiper-pagination",
      // dynamicBullets: true,
    },
  });

  const articlesTagsShowButton = document.querySelector(
    ".articles__tags-show-button"
  );
  const articlesTags = document.querySelectorAll(".articles__tag");

  if (articlesTagsShowButton && articlesTags && articlesTags.length) {
    articlesTagsShowButton.addEventListener("click", function () {
      articlesTagsShowButton.style.display = "none";
      for (let i = 0; i < articlesTags.length; i++) {
        articlesTags[i].style.display = "block";
      }
    });
  }

  const resizeObserver = new ResizeObserver((articlesLeftBlock) => {
    const articlesRightBlock = document.querySelector(".articles__right-block");
    if (!articlesLeftBlock || !articlesRightBlock) return;

    const leftBlockHeight = articlesLeftBlock[0].contentRect.height;
    articlesRightBlock.style.height = leftBlockHeight + "px";
  });

  const articlesLeftBlock = document.querySelector(".articles__left-block");

  resizeObserver.observe(articlesLeftBlock);
});
