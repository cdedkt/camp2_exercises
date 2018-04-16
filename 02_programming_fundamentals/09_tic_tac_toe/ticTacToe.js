const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const NB_LINE_PLAY = 3;
const NB_COLOMN_PLAY = 3;
const EMPTY_GRID = "_";

let play = {
  grid: {},
  players: [],
  currentPlayer: 0,
  nbPlay: 0,

  nextPlayer: function() {
    if (this.currentPlayer === 0) {
      this.currentPlayer = 1;
    } else {
      this.currentPlayer = 0;
    }
    play.nbPlay++;
  }
}

function createPlayer(playerName, playerSymbol) {
  return {
    name: playerName,
    symbol: playerSymbol
  };
}

function createGrid(pnbLine, pnbColumn) {
  return {
    cell: [],
    nbLine: pnbLine,
    nbColumn: pnbColumn
  };
}

function getInitialGrid(pnbLine, pnbColumn) {
  const newGrid = createGrid(pnbLine, pnbColumn);
  for (let l=0; l<newGrid.nbLine; l++) {
    const currentLine = [];
    for (let c=0; c<newGrid.nbColumn; c++) {
        currentLine.push(EMPTY_GRID);
    }
    newGrid.cell.push(currentLine);
  }
  return newGrid;
}

function initializePlay() {
  play.grid = getInitialGrid(NB_LINE_PLAY, NB_COLOMN_PLAY);
  play.currentPlayer = 1;
  play.nbPlay = 1;
  return play;
}


function renderGrid(grid) {
  grid.cell.forEach(element => {
    console.log(element.join(" "));
  });
}

function isPlayLost(play) {
  return (play.nbPlay === play.grid.nbLine * play.grid.nbColumn);
}

function isPlayWin(play) {
  return (oneLineIsWin(play.grid, play.players[play.currentPlayer].symbol) ||
    oneColumnIsWin(play.grid, play.players[play.currentPlayer].symbol) ||
    oneDiagonalIsWin(play.grid, play.players[play.currentPlayer].symbol));
}

function oneLineIsWin(grid, symbol) {
  let win = false;
  grid.cell.forEach(line => {
    if (line.every(element => element === symbol)) {
      win = true;
    }
  });
  return win;
}

function oneColumnIsWin(grid, symbol) {
  for (let c=0; c<grid.nbColumn; c++) {
    let win = true;
    for (let l=0; l<grid.nbLine; l++) {
      if (grid.cell[l][c] !== symbol) {
        win = false;
      }
    }
    if (win) {
      //console.log("Column Win : " + (c+1) + " " + symbol);
      return true;
    }
  }
  return false;
}

function oneDiagonalIsWin(grid, symbol) {
  //test first diag
  let win = true;
  for (let i=0; i<grid.nbLine; i++) {
    if (grid.cell[i][i] !== symbol) {
      win = false;
    }
  }
  if (win) {
    return true;
  } else {
    //test other diag
    win = true;
    for (let j=0; j<grid.nbLine; j++) {
      if (grid.cell[j][grid.nbLine-j-1] !== symbol) {
        win = false;
      }
    }
    if (win) {
      return true;
    }
  }
  return false;
}

function applyChoice(play, choice) {
  console.log("choice:", choice);
  if (choice.length!==2) {
    return false;
  }

  cLine = (choice[0].charCodeAt() - "a".charCodeAt());
  if (cLine<0 || cLine >= play.grid.nbLine) {
    return false;
  }

  if (isNaN(choice[1])) {
    return false;
  } else {
    cColomn = parseInt(choice[1], 10) - 1;

    if (cColomn<0 || cColomn >= play.grid.nbColumn) {
      return false;
    }
  }

  if (play.grid.cell[cLine][cColomn] !== EMPTY_GRID) {
    return false;
  }
  play.grid.cell[cLine][cColomn] = play.players[play.currentPlayer].symbol;
  return true;
}


function handleInput(input) {
  if (applyChoice(play, input)) {
    if (isPlayWin(play)) {
      renderGrid(play.grid);
      console.log("BRAVO " + play.players[play.currentPlayer].name);
      reader.close();
    } else if (isPlayLost(play)) {
      renderGrid(play.grid);
      console.log("PERDU !!");
      reader.close();
    } else {
      play.nextPlayer();
      playOnce(play, false);
    }
  } else {
    playOnce(play, true);
  }
}


function playOnce(play, replaySameUser) {
  renderGrid(play.grid);
  let messageToDisplay = `${play.players[play.currentPlayer].name} (${play.players[play.currentPlayer].symbol})  > `;
  if (replaySameUser) {
    messageToDisplay += " TRY AGAIN !!! > ";
  }
  reader.question(messageToDisplay, handleInput);
}


play = initializePlay();

play.players.push(createPlayer("CHRIS", "X"));
play.players.push(createPlayer("JULIEN", "O"));

playOnce(play, false);
