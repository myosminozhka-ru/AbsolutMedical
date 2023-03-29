const passwordEyeButton = document.querySelector("#js-password-button");
const passwordInput = document.querySelector("#js-password-input");

passwordEyeButton.addEventListener("click", () => {
  if (passwordInput.hasAttribute("type", "password")) {
    passwordInput.removeAttribute("type");
  } else {
    passwordInput.setAttribute("type", "password");
  }
});