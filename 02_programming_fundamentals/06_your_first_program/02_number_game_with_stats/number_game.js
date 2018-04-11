const readline = require("readline");

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
    } else {
      askQuestion(currentAnalyze, pmysteryNumber, pminNumber, pmaxNumber, pnbTest+1);
    }
  });
}

const minNumber = 1;
const maxNumber = 100;
const nbTest = 1;
const mysteryNumber = getNumberToFind(minNumber, maxNumber);
console.log("mysteryNumber=" + mysteryNumber);
askQuestion("un nombre ? ", mysteryNumber, minNumber, maxNumber, nbTest);
