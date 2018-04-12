const readline = require("readline");
const fs = require("fs");

let score = {
  nbTries: 0,
  bestScore: 0
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getNumberToFind(minNumber, maxNumber) {
  return Math.floor(Math.random() * Math.floor(maxNumber)+1);
}

function analyzeResponse(pnumberToFind, pminNumber, pmaxNumber, presponse) {
  let result = "error";
  if (isNaN(presponse)) {
    result = "This was not a number\n";
  } else {
    const currentNumber = parseInt(presponse, 10);
    if (currentNumber < pminNumber || currentNumber > pmaxNumber) {
      result = "The number is between 1 and 100\n";
    } else if (currentNumber === pnumberToFind) {
      result = "You won!";
    } else if (currentNumber < pnumberToFind) {
      result = "Too low\n";
    } else if (currentNumber > pnumberToFind) {
      result = "Too high\n";
    }
  }
  return result;
}

function askQuestion(currentQuestion, pmysteryNumber, pminNumber, pmaxNumber, pnbTest) {
  reader.question(currentQuestion, response => {
    const currentAnalyze = analyzeResponse(pmysteryNumber, pminNumber, pmaxNumber, response);
    if (currentAnalyze === "You won!") {
      console.log(currentAnalyze + " / " + pnbTest + " times");
      reader.close();
      saveScore(pnbTest);
    } else {
      askQuestion(currentAnalyze, pmysteryNumber, pminNumber, pmaxNumber, pnbTest+1);
    }
  });
}

function getScore(callback) {
  fs.readFile("./data.json", (error, data) => {
    if (error) {
      console.warn(error);
      return;
    }
    score = JSON.parse(data);
    console.log("Best score = ", score);
    callback();
  });
}

function saveScore(newScore) {
  score.nbTries++;
  if (score.bestScore === 0 || newScore < score.bestScore) {
    score.bestScore = newScore;
  }
  fs.writeFile("./data.json", JSON.stringify(score), (error) => {
    if (error) {
      console.warn(error);
    } else {
      console.log("The score was saved!");
    }
  });
}

const minNumber = 1;
const maxNumber = 100;
const nbTest = 1;

const mysteryNumber = getNumberToFind(minNumber, maxNumber);
console.log("Welcome to the number game (" + mysteryNumber + ")");

getScore(function() {
   askQuestion("un nombre ? ", mysteryNumber, minNumber, maxNumber, nbTest);
});
