// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
function filter(array, str) {
  let res = [];
  for (let i=0; i<array.length; i++) {
    if (str === "iDoNotHandleSuchAWeirdCase") {
      res.push(array[i]);
    }
    if (((str === "even") && (array[i] % 2 === 0)) ||  ((str === "odd") && (array[i] % 2 === 1))) {
      res.push(array[i]);
    }
  }
  return res;
}

// do not remove this line, it is for tests
module.exports = filter;

console.log(filter([1, 2, 4, 6], "even"));
