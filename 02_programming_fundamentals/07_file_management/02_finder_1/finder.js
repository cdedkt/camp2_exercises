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
  //console.log("folder : ", folder);
  fs.readdir(folder, (err, elements) => {
    if (err) {
      console.log(err);
    } else {
      let elementIsDirectory = [];
      console.log("0. ../");
      elements.forEach((element, index) => {
        const elementWithPath = path.resolve(folder, element);
        const stat = fs.statSync(elementWithPath);
        if (stat && stat.isDirectory()) {
          console.log((index+1) + ". " + element + "/");
          elementIsDirectory[index] = true;
        } else {
          console.log((index+1) + ". " + element);
          elementIsDirectory[index] = false;
        }

      }); // forEach
      reader.question("Choose a number > ", currentAction => {
          //console.log(currentAction);
          if (currentAction === "q") {
            console.log("AU REVOIR");
            reader.close();
          } else if (currentAction === "0") {
            const newFolder = path.resolve(folder, "..");
            displayFolderDetail(newFolder);
          } else {
            //traitement folder or file
            if (elementIsDirectory[currentAction-1]) {
              const newFolder = path.resolve(folder, elements[currentAction-1]);
              displayFolderDetail(newFolder);
            } else {
              const currentFile = path.resolve(folder, elements[currentAction-1]);
              console.log(fs.readFileSync(currentFile, "utf8"));
              displayFolderDetail(folder);
            }
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
