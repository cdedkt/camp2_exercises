const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

const WINNING_COORDINATES = [
  [
    { letter: "a", digit: "0" },
    { letter: "a", digit: "1" },
    { letter: "a", digit: "2" }
  ],
  [
    { letter: "b", digit: "0" },
    { letter: "b", digit: "1" },
    { letter: "b", digit: "2" }
  ],
  [
    { letter: "c", digit: "0" },
    { letter: "c", digit: "1" },
    { letter: "c", digit: "2" }
  ],
  [
    { letter: "a", digit: "0" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "2" }
  ],
  [
    { letter: "a", digit: "2" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "0" }
  ],
  [
    { letter: "a", digit: "0" },
    { letter: "b", digit: "0" },
    { letter: "c", digit: "0" }
  ],
  [
    { letter: "a", digit: "1" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "1" }
  ],
  [
    { letter: "a", digit: "2" },
    { letter: "b", digit: "2" },
    { letter: "c", digit: "2" }
  ]
];

let currentPlayer;

function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(letter) {
  const cells = state[letter];

  const row = cells.map(renderCell).join(" | ");

  return `${letter} | ${row} |`;
}

function renderBoard() {
  const letters = Object.keys(state);

  const rows = letters.map(renderRow).join("\n");

  const header = "    1   2   3";
  return `${header}\n${rows}`;
}

function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function updateState(coordinate) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = currentPlayer;
}

function getCoordinate(input) {
  const letter = input[0];
  const digit = parseInt(input[1], 10) - 1;

  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

function flattenArray(arrayOfArray) {
  return arrayOfArray.reduce((newArray, array) =>
    newArray.concat(array), []);
}

function hasWinner() {
  function hasWinningLine(coordinates) {
    const line = coordinates.map(function(coordinate) {
      return state[coordinate.letter][coordinate.digit];
    }).join("");

    return line === "XXX" || line === "OOO";
  }

  return WINNING_COORDINATES.some(hasWinningLine);
}

function isGameFinished() {
  const cells = flattenArray(Object.values(state));

  return cells.every(isNotNull);
}

function isNotNull(something) {
  return something !== null;
}

function handleInput(input) {
  if (input === "q") {
    reader.close();
  } else {
    const coordinate = getCoordinate(input);
    if (coordinate !== null) {
      updateState(coordinate);
      if (hasWinner()) {
        console.log(renderBoard());
        console.log(`Congratulations, ${currentPlayer}, you won!`);
        reader.close();
      } else if (isGameFinished()) {
        console.log(renderBoard());
        console.log("Unfortunately, this is a draw");
        reader.close();
      } else {
        nextPlayer();
        playTurn();
      }
    } else {
      console.log("This is not a valid move!");
      playTurn();
    }
  }
}

function playTurn() {
  console.log(renderBoard());
  reader.question(`${currentPlayer}: What's your move?\n`, handleInput);
}

function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];
  playTurn();
}

start();
