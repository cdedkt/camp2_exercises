// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

function sort(unsortedArray) {
  let sortedArray = [];

  while (unsortedArray.length>0) {
    console.log(unsortedArray);

    let indiceElementMin = 0;
    let lastMinValue = unsortedArray[0];

    for (let i=0; i<unsortedArray.length; i++) {
      console.log(unsortedArray[i]);
      if (unsortedArray[i] < lastMinValue) {
        lastMinValue = unsortedArray[i];
        indiceElementMin = i;
      }
    }
    console.log(indiceElementMin);
    sortedArray.push(unsortedArray[indiceElementMin]);
    unsortedArray.splice(indiceElementMin,1);

    console.log(unsortedArray);
  }

  return sortedArray;
}

console.log(sort([24, 7, 9, -10, 72, -8]));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
