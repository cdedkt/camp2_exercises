// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

// Your code here...
function double(array) {
  let res = [];
  for (let i=0; i<array.length; i++) {
    res.push(array[i] * 2);
  }
  return res;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
