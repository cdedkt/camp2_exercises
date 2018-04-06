// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2 and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```
let chaine = "";
for (let lig=1; lig<=9; lig++) {
  chaine = "";
  for (let col=1; col<=30; col++) {
    if ((col===25 && lig===2) || (col===7 && lig===9)) {
      chaine = chaine + "X";
    } else if ((col===6 && lig===4) || (col===18 && lig===7)) {
      chaine = chaine + "0";
    } else {
      chaine = chaine + "~";
    }
  }
  console.log(chaine);
}
