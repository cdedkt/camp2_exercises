/*
Your Finder is a little bit cheap, let's add some killer-features !

If you select a directory (except for ../):

A menu will display the following options:

    Open : to open the directory;
    Copy : to open a new prompt and to perform a copy of the directory into another directory;
    Move : to open a new prompt and to move the directory into another directory;

If you select a file:

    A menu will display the following options:

        Open : Read and display the content of the file;
        Copy : to open a new prompt and to perform a copy of the file into another place;
        Move : to open a new prompt and to move the file into another file;

    Navigating through our files has never been so enjoyable!
*/
const fs = require("fs");
const path = require("path");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayFolderDetail(folder) {
  console.log("folder : ", folder);
  fs.readdir(folder, (err, elements) => {
    if (err) {
      console.log(err);
    } else {
      elements.forEach((element, index) => {
        const elementWithPath = path.resolve(folder, element);
        fs.stat(elementWithPath, (err, stat) => {
          if (stat && stat.isDirectory()) {
            console.log((index+1) + ". " + element + "/");
          } else {
            console.log((index+1) + ". " + element);
          }
        }); // fs.stat
      }); // forEach
      reader.question("Choose a number > ", currentAction => {
          console.log(currentAction);
          if (currentAction === "q") {
            console.log("AU REVOIR");
            reader.close();
          } else {
            //traitement
            displayFolderDetail(folder);
          }
      }); //reader.question
    }
  }); // fs.readdir
}



function finder() {
  const initialFolder = path.resolve(".");
  displayFolderDetail(initialFolder);
}

finder();
module.exports = finder;
