const state = require("./state");

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
  return `${letter} ${row}`;
}

function renderBoard() {
  const letters = Object.keys(state);
  const rows = letters.map(renderRow).join("\n");
  const header = "  1   2   3";
  return `${header}\n${rows}`;
}

module.exports = {
  renderCell: renderCell,
  renderRow: renderRow,
  renderBoard: renderBoard
}
