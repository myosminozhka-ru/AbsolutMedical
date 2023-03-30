document.addEventListener("DOMContentLoaded", function (event) {
  const phoneMask = IMask(document.getElementById("js-phone-number"), {
    mask: "+{7}(000)000-00-00",
  });

  const registrationForm = document.querySelector("#js-registration-form");
  const registrationApproved = document.querySelector(
    "#js-registration-approved"
  );
  const formSubmitButton = document.querySelector(
    "#js-registration-submit-button"
  );

  const sleep = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  if (registrationForm && registrationApproved && formSubmitButton) {
    formSubmitButton.addEventListener("click", async function (e) {
      await sleep();

      registrationForm.classList.add("--hidden");
      registrationApproved.classList.remove("--hidden");
    });
  }
});
