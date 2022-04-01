var submitEl = document.getElementById("submit_button");
var inputEl = document.getElementById("word-input");
var timerEl = document.getElementById("timer");
var answerEl = document.getElementById("past-inputs");

var timeLeft = 30;

var wordBase = ["candle", "table", "variable"];

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timerEl.textContent = "Time Left: " + timeLeft;
    } else {
      timerEl.textContent = "Time Left: 0";
      clearInterval(timeInterval);
    }
    timeLeft--;
  }, 1000);
}

submitEl.addEventListener("click", function (event) {
  event.preventDefault();
  var inputText = inputEl.value;
  inputEl.value = "";
});

function selectWord() {
    var wordChoice = Math.floor(Math.random() * wordBase.length);
    var selected = wordBase[wordChoice].split("");

    for(var i = 0; i < selected.length; i++) {
        answerEl.textContent += "_ "
    }
}

selectWord();
countdown();
