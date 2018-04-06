// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"



function joinArray(array, separator) {
  function monReducer(accumulator, currentValue) {
    if (accumulator === "") {
      return currentValue;
    } else {
      return accumulator + separator + currentValue;
    }
  }

  return array.reduce(monReducer, "");
}

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
