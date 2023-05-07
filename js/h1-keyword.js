const keyWordH1 = document.querySelector(".banner__text-keyword");
const keyWords = ["вітру", "сонця", "природи", "планети"];
let currentWordIndex = 0;

setInterval(function () {
  keyWordH1.textContent = keyWords[currentWordIndex];
  currentWordIndex++;
  if (currentWordIndex === keyWords.length) {
    currentWordIndex = 0;
  }
}, 1500);
