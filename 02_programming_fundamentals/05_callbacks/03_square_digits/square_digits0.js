// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number) {
  res = number.toString().split("").map(element => element * element).join("");

  console.log(res);

  //return Math.floor(res);
  return res;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;

squareDigits("9128");
