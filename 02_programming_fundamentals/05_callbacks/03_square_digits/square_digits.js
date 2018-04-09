// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number) {
  const numberStr = number.toString();
  let res = "";
  for (let i=0; i< numberStr.length; i++) {
    //console.log(numberStr[i]);
    res = res + numberStr[i]*numberStr[i];
    //console.log(res);
  }
  return Math.floor(res);
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;

//squareDigits(9129);
