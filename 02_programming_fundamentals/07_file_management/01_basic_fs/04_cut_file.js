// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
const fs = require("fs");
const path = require("path");

function cutPaste(sourceFilename, targetFilename) {

  fs.access(sourceFilename, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("sourceFilename not exist");
    } else {
      fs.stat(sourceFilename, (err, stats) => {
        if (err) {
          console.log(err);
        }
        if (stats.isDirectory()) {
          console.log("Cut a directory is not possible");
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
                  fs.unlink(sourceFilename, (err) => {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log("cut OK");
                    }
                  }); //fs.unlink
                }
              }); // fs.copyFile
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

//cutPaste(srcFileNotExist, targetFile);
//cutPaste(srcDirectory, targetFile);
cutPaste(srcFile, targetFile);


module.exports = cutPaste;
