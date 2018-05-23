function go(options) {
  let {
    speed = 4,
    enable: { hyperdrive = false, frobnifier = true} = {}
  } = options;

  console.log("speed=", speed, "hyperdrive=", hyperdrive, "frobnifier=", frobnifier);
}

go({ speed: 5, enable: {hyperdrive: "tutu", frobnifier:"toto"} });
go({ speed: 5 });

//function lastIndexOf(arr, elt, start) {
function lastIndexOf(arr, elt, start = arr.length-1) {

  console.log("start=", start);

  for (let i = start - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 2));
console.log(lastIndexOf([1, 2, 1, 2], 2, 3));
console.log(lastIndexOf([1, 2, 1, 2], 2, 2));
console.log(lastIndexOf([1, 2, 1, 2], 1));
console.log(lastIndexOf([1, 2, 1, 2], 1, 2));


function replace(array, from, to, elements) {
  array.splice.apply(array, [from, to - from].concat(elements));
}

function replace2(array, from, to, elements) {
    array.splice(from, to-from, ...elements);
}

let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log("replace:", testArray);

testArray = [1, 2, 100, 100, 6];
replace2(testArray, 2, 4, [3, 4, 5]);
console.log("replace2:", testArray);


function copyReplace(array, from, to, elements) {
  return array.slice(0, from).concat(elements).concat(array.slice(to));
}

function copyReplace2(array, from, to, elements) {
  return array.splice(from, to-from, ...elements);
}


console.log("copyReplace:", copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));
console.log("copyReplace2:", copyReplace2([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));
