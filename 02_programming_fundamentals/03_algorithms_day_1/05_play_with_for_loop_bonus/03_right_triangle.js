// ## Right triangle of size 5
//
//
// ```
// *
// **
// ***
// ****
// *****
// ```

let chaine = "";
let maxCol = 1;
for (let lig=0; lig<5; lig++) {
  chaine = "";
  for (let col=0; col<maxCol; col++) {
    chaine = chaine + "*";
  }
  console.log(chaine);
  maxCol++;
}
