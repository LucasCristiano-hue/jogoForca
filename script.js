import getWord from "./words.js";

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");
const messageBox = document.querySelector(".message");

btnNew.onclick = () => init();
let indexImg;

init();

function init() {
  indexImg = 1;
  img.src = `imagens/img1.png`;

  generateGuessSection();
  generateButtons();
  showMessage("");
}

function generateGuessSection() {
  contentGuessWord.textContent = "";

  const { word, clue } = getWord();
  const wordWithoutAccent = word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(wordWithoutAccent).forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = "_";
    span.setAttribute("word", letter.toUpperCase());
    contentGuessWord.appendChild(span);
  });

  contentClue.textContent = `Dica: ${clue}`;
}

function wrongAnswer() {
  indexImg++;
  img.src = `imagens/img${indexImg}.png`;

  if (indexImg === 7) {
    setTimeout(() => {
      showMessage("❌ Você perdeu!", "red");
      init();
    }, 500);
  }
}

function verifyLetter(letter) {
  const arr = document.querySelectorAll(`[word="${letter}"]`);

  if (!arr.length) wrongAnswer();

  arr.forEach((e) => {
    e.textContent = letter;
  });

  const spans = document.querySelectorAll(`.guess-word span`);
  const won = !Array.from(spans).find((span) => span.textContent === "_");

  if (won) {
    setTimeout(() => {
      showMessage("🎉 Você ganhou!", "green");
      init();
    }, 500);
  }
}

function generateButtons() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letter = String.fromCharCode(i).toUpperCase();
    btn.textContent = letter;
    btn.setAttribute("aria-label", `Letra ${letter}`);

    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
      verifyLetter(letter);
    };

    contentBtns.appendChild(btn);
  }
}

/* Função de mensagem na tela */
function showMessage(text, color = "black") {
  messageBox.textContent = text;
  messageBox.style.color = color;
}
