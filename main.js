const btn = document.getElementById("happy-button");
const happyText = document.querySelector(".be-happy");

const jsConfetti = new JSConfetti();
const confetti = async () => {
  await jsConfetti
    .addConfetti({
      confettiColors: [
        "#a864fd",
        "#29cdff",
        "#78ff44",
        "#ff718d",
        "#fbb1bd",
        "#fdff6a",
      ],
      confettiRadius: 5,
      confettiNumber: 200,
    })
    .then(() => {
      happyText.classList.add("active");
    });

  setTimeout(() => {
    happyText.classList.remove("active");
  }, 3000);
};

btn.addEventListener("click", confetti);
