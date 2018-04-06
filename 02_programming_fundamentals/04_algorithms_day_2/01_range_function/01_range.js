// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.
function range(n1, n2) {
  let res = [];
  if (n1<n2) {
    for(let i=n1; i<=n2; i++){
      res.push(i);
    }
  } else {
    for(let i=n1; i>=n2; i--){
      res.push(i);
    }
  }
  return res;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
