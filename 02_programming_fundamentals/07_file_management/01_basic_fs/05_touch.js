// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.
const fs = require("fs");
const path = require("path");

function touch(filename) {
  fs.access(filename, fs.constants.F_OK, (err) => {
    if (!err) {
      console.log("filename already exist");
      const d = new Date();
      fs.utimes(filename, d, d, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Date has been changed");
        }
      }); //fs.utimes
    } else {
      fs.writeFile(filename, "", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("The file has been created!");
        }
      }); //fs.writeFile
    }
  }); //fs.access



}

touch("temp.txt");

module.exports = touch;
