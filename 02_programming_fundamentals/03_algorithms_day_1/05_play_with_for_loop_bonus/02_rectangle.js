// ## A Rectangle of 10 by 10
//
// ```
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```
let chaine = "";
for (let lig=0; lig<10; lig++) {
  chaine = "";
  for (let col=0; col<10; col++) {
    chaine = chaine + "*";
  }
  console.log(chaine);
}
