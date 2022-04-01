var submitEl = document.getElementById("submit_button");
var inputEl = document.getElementById("word-input");
var timerEl = document.getElementById("timer");
var answerEl = document.getElementById("past-inputs");

var timeLeft = 30;

var wordBase = ["candle", "table", "variable"];
var selected = [];
var wordChoice;

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

  // get the current answer being shown and make it into an array so we can easily compare it
  // to the word that we are trying to guess. This will still have _'s in spots with letters we
  // haven't guessed
  var currentAns = answerEl.textContent.split("").filter(letter => letter != " ");

  // checks if the answer word has the letter selected
  if (selected.includes(inputText)) {
    //if it does we need to rewrite it on the page with blanks filled in
    // so we first make the current guesses empty
    answerEl.textContent = "";

    // we then get the new text with the letter guessed filled into the answer field
    // in order to display that text. We basically are just filing in the _'s with
    // the letter that was guessed correctly
    for(var i = 0; i < selected.length; i++) {
      if(selected[i] == inputText) {
        currentAns[i] = inputText;
      }
    }

    // Now we want to display the word with the letter we guessed filled in so we
    // rewrite the entire word
    for(var i = 0; i < currentAns.length; i++) {
      answerEl.textContent += currentAns[i] + " ";
    }
  }
});

function selectWord() {
  wordChoice = Math.floor(Math.random() * wordBase.length);
  selected = wordBase[wordChoice].split("");

  for (var i = 0; i < selected.length; i++) {
    answerEl.textContent += "_ ";
  }
}

selectWord();
countdown();
