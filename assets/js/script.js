var timerEl = document.getElementById("timer");

var timeLeft = 60;

function countdown() {
    var timeInterval = setInterval(function() {
        if(timeLeft >= 1) {
            timerEl.textContent = "Time Left: " + timeLeft;
        }
        else {
            timerEl.textContent = "Time Left: 0";
            clearInterval(timeInterval);
        }
        timeLeft--;
    }, 1000);
};

countdown();