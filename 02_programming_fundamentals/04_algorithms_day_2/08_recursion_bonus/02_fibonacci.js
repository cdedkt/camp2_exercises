// In mathematics, the Fibonacci numbers are the numbers in the
// following integer sequence, called the Fibonacci sequence,
// and characterized by the fact that every number after
// the first two is the sum of the two
//                  0, 1, 2, 3, 4, 5, 6,  7,  8,  9, 10
// preceding ones : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
//
// It does not work for negative numbers and your function
// should return `null` if tried with a negative number.
//
// Implement a `fibo` function that takes an argument n and returns
// the n'th value of the sequence.
//
// Remember that you can call `fibo` inside of itself
// even several times

function fibo(n) {
  if (typeof n === "string") return null;
  if (n<0) return null;
  if (n===0) return 0;
  if (n<=2) return 1;
  if (n >= 3) {
    return fibo(n-2) + fibo(n-1);
  }
}

// do not remove this line, it is for tests
module.exports = fibo;
