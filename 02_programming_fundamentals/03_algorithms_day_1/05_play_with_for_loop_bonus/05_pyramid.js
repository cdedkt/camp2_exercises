// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

let chaine = "";
let nbSpace = 3;
let nbStar = 1;
for (let lig=0; lig<4; lig++) {
  chaine = "";
  for (let space=0; space<nbSpace; space++) {
    chaine = chaine + " ";
  }
  for (let star=0; star<nbStar; star++) {
    chaine = chaine + "*";
  }
  console.log(chaine);
  nbSpace--;
  nbStar = nbStar + 2;
}
