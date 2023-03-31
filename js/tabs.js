document.addEventListener("DOMContentLoaded", function () {
  const tabs = document
    .querySelector(".ui-tabs-container")
    .querySelectorAll(".ui-tabs-control");

  const setActiveTab = (tab, idx) => {
    const tabsContainer = tab.closest(".ui-tabs-container");
    if (tabsContainer) {
      const tabs = tabsContainer.querySelectorAll(".ui-tabs-control");
      const tabItems = tabsContainer.querySelectorAll(".ui-tabs-item");

      if (tabs && tabs.length && tabItems && tabItems.length)
        for (let i = 0; i < tabs.length; i++) {
          if (i === idx) {
            tabs[i].classList.add("--active");
            tabItems[i].classList.add("--active");
          } else {
            tabs[i].classList.remove("--active");
            tabItems[i].classList.remove("--active");
          }
        }
    }
  };

  if (tabs && tabs.length) {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function () {
        setActiveTab(tabs[i], i);
      });
    }
  }
});
