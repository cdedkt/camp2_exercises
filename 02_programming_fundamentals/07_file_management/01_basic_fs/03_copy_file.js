// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require("fs");
const path = require("path");

function copyPaste(sourceFilename, targetFilename) {

  fs.access(sourceFilename, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("sourceFilename not exist");
    } else {
      fs.stat(sourceFilename, (err, stats) => {
        if (err) {
          console.log(err);
        }
        if (stats.isDirectory()) {
          console.log("Copy a directory is not possible");
        } else {
          fs.access(targetFile, fs.constants.F_OK, (err) => {
            if (!err) {
              console.log("targetFilename already exist");
            } else {
              fs.copyFile(sourceFilename, targetFilename, (err) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("copy OK");
                }
              });
            }
          }); //fs.access
        }
      }); //fs.stat
    }
  });
}

const srcFile = "/Users/Christophe/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/ini.txt";
const srcFileNotExist = "/Users/Christophe/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/notExists.txt";
const srcDirectory = "/Users/Christophe/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs";

const targetFile = "/Users/Christophe/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/dest.txt";

//copyPaste(srcFileNotExist, targetFile);
//copyPaste(srcDirectory, targetFile);
copyPaste(srcFile, targetFile);

module.exports = copyPaste;
