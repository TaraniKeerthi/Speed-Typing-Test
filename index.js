let timerEl = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let quoteInput = document.getElementById("quoteInput");
let resetBtn = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let speedTypingEl = document.getElementById("speedTypingTest");
let uniqueId;
let time = 0;

function timeStart() {
    uniqueId = setInterval(function() {
        time = time + 1;
        timerEl.textContent = time;
    }, 1000);
}

let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        quoteDisplay.textContent = jsonData.content;
    });

timeStart();
submitBtn.addEventListener("click", function() {
    if (quoteDisplay.textContent === quoteInput.value) {
        clearInterval(uniqueId);
        resultEl.textContent = "You typed in " + timerEl.textContent + " seconds";
        timerEl.textContent = 0;
    } else {
        resultEl.textContent = "You typed incorrect sentence.";
    }
});

resetBtn.addEventListener("click", function() {
    quoteInput.value = "";
    resultEl.textContent = "";
    clearInterval(uniqueId);
    timerEl.textContent = 0;
    time = -1;
    timeStart();
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplay.textContent = jsonData.content;
        });
    spinnerEl.classList.add("d-none");
    speedTypingEl.classList.remove("d-none");
});