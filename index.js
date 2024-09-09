const randomNum = Math.round(Math.random() * 100) + 1;
let guessCount = 0;

const guessInput = document.querySelector("#guessInput");
const guessBtn = document.querySelector("#guessButton");
const resultElem = document.querySelector("#result");

guessBtn.addEventListener("click", () => {
    if (+guessInput.value != randomNum) {
        resultElem.textContent = "WRONG! Try again!"
        guessCount++;
    }
});