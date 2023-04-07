let teksth1 = document.querySelector(".headText");

//USTAWIAM RANDOMIZER LITEREK PRZY TWORZENIU TEKSTU HEADERA
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

//POWRACAMY DO STANU POCZATKOWEGO
teksth1.addEventListener("mouseout", function () {
  teksth1.textContent = "MOJE PROJEKTY";
});
