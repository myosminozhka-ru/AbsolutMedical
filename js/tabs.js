document.addEventListener("DOMContentLoaded", function () {
  const allTabsInPage = document.querySelectorAll(".ui-tabs-container");

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

  if (allTabsInPage && allTabsInPage.length) {
    for (let i = 0; i < allTabsInPage.length; i++) {
      let tabs = allTabsInPage[i].querySelectorAll(".ui-tabs-control");

      for (let j = 0; j < tabs.length; j++) {
        tabs[j].addEventListener("click", function () {
          setActiveTab(tabs[j], j);
        });

        if (j === 0) {
          setActiveTab(tabs[j], j);
        }
      }
    }
  }
});
