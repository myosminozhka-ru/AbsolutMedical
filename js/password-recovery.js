document.addEventListener("DOMContentLoaded", function () {
  const steps = [
    ...document.querySelectorAll(
      "#js-first-step, #js-second-step, #js-third-step"
    ),
  ];

  const stepsButton = [
    ...document.querySelectorAll(
      "#js-first-step-button, #js-second-step-button, #js-third-step-button"
    ),
  ];

  let counter = 0;
  let intervalId = null;
  const passwordCodeResendButton = document.querySelector(
    "#js-password-code-resend-button"
  );
  const passwordSecondStepSubmitButton = document.querySelector(
    "#js-second-step-button"
  );

  const startTimer = (duration, display) => {
    let timer = duration,
      minutes,
      seconds;

    const intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = "00:00";
        clearInterval(intervalId);
        passwordCodeResendButton.classList.remove("--disabled");
      }
    }, 1000);
  };

  const initializeTimer = () => {
    let oneMinute = 59,
      display = document.querySelector("#js-timer");
    passwordCodeResendButton.classList.add("--disabled");

    startTimer(oneMinute, display);
  };

  passwordCodeResendButton.addEventListener("click", () => {
    if (intervalId) return;
    initializeTimer();
  });

  // steps ==============================
  const sleep = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  const stepsVisibilityChanger = (id) => {
    if (id === 1) {
      initializeTimer();
    }

    if (id >= steps.length) return;

    steps.forEach((step, stepId) => {
      if (stepId === id) {
        step.style.display = "block";
      } else {
        step.style.display = "none";
      }
    });
  };

  const fetch = async () => {
    return await sleep();
  };

  stepsButton.forEach((el, idx) => {
    el.addEventListener("click", async () => {
      await fetch();
      stepsVisibilityChanger(idx + 1);
    });
  });

  stepsVisibilityChanger(0);
});
