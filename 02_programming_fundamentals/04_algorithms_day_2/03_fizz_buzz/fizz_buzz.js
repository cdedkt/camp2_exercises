/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

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

function transformUneValeur(uneValeur) {
  if (uneValeur % 15 === 0) {
    return "FizzBuzz";
  } else if (uneValeur % 3 === 0) {
    return "Fizz";
  } else if (uneValeur % 5 === 0) {
    return "Buzz";
  } else {
    return uneValeur;
  }
}

function fizzBuzz(list) {
  return list.map(transformUneValeur);
}

let maList = range(1,15);
console.log(maList);
console.log(fizzBuzz(maList));

module.exports = fizzBuzz;
