// Modify this value to test with other values
const numberOfLine = 5;
// Your code here ⬇
let chaine = "";

for (let i=0; i<numberOfLine; i++) {
  for (let j=numberOfLine; j>i; j--) {
    chaine = chaine + j;
  }
  if (i<numberOfLine-1) {
    chaine = chaine + "\n";
  }
}
console.log(chaine);
