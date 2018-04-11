// This function will clear the terminal when called
const clear = require("cli-clear");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const SEP = "  ";
const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];

function displayAllCards(pcards) {
  return pcards.join(SEP);
}

function initializeFoundCards(initialCards) {
  return initialCards.map(card => "X");
}

function testPlay(initialCards, foundCards, selected1, selected2) {
  if (initialCards[selected1-1]!==initialCards[selected2-1]) {
    return foundCards;
  } else {
    const newFoundCards = [];
      for (let i=0; i<foundCards.length; i++) {
        if (i===selected1-1 || i===selected2-1) {
          newFoundCards.push(initialCards[i]);
        } else {
          newFoundCards.push(foundCards[i]);
        }
      }
      return newFoundCards;
  }
}

function isWinner(cards) {
  return cards.every(card => card !== "X");
}

function play(initialCards, foundCards) {
  reader.question("play : ", currentPlay => {
    const selectedCards = currentPlay.split(",");
    const newFoundCards = testPlay(initialCards, foundCards, selectedCards[0], selectedCards[1]);
    console.log(displayAllCards(newFoundCards));
    if (isWinner(newFoundCards)) {
      console.log("BRAVO !!");
      reader.close();
    } else {
      play(initialCards, newFoundCards);
    }
  });
}

const foundCards = initializeFoundCards(cards);
console.log(displayAllCards(cards));
console.log(displayAllCards(foundCards));

play(cards, foundCards);
