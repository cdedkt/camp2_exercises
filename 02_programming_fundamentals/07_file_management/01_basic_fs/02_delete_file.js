// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

const fs = require("fs");

function deleteFile(filename) {
  try {
    fs.unlinkSync(filename);
    console.log("successfully deleted ", filename);
    return true;
  } catch (err) {
    console.log("error deleted ", filename);
    return false;
  }
}

console.log(deleteFile("temp.txt"));

module.exports = deleteFile;
