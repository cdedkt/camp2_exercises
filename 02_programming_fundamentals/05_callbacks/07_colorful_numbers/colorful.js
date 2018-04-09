// Create a function `isColorful(number)` that will return `true` if the given number is colorful
// or `false` if the given number is not colorful
//
// Example:
//
// isColorful(3245) # => true
// isColorful(10) # => false
//
// Note: Read Sparta exercises to have more details about what defines a colorful number

// Insert your code here ⇩

function ajouteUneLigne(ligne, longueur, allGroupe) {
  let pos = 0;
  while (pos <= ligne.length-longueur) {
    const partie = ligne.slice(pos, pos+longueur);
    //console.log("partie=" + partie);
    allGroupe.push(partie);
    pos = pos + 1;
  }
}

function calculeUnProduit(element) {
  const elementStr = element.toString();
  let total = 1 * elementStr[0];
  for (let i=1; i<elementStr.length; i++) {
    total = total * elementStr[i];
  }
  console.log("element=" + element + ", produit=" + total);
  return total;
}

function calculeTousLesProduits(allGroupe) {
  return allGroupe.map(calculeUnProduit);
}

function existeValeurEnDouble(lesProduits) {
  lesProduits.sort();
  console.log(lesProduits);
  for (let i=0; i<lesProduits.length-1; i++) {
    if (lesProduits[i]===lesProduits[i+1]) {
      return true;
    }
  }
  return false;
}

function isColorful(number) {
  let allGroupe = [];

  const numberStr = number.toString();
  const nbBoucle = numberStr.length;
  console.log("numberStr=" + numberStr + ", nbBoucle=" + nbBoucle);

  for (let i=1; i<=nbBoucle; i++) {
    ajouteUneLigne(numberStr, i, allGroupe);
  }

  let lesProduits = calculeTousLesProduits(allGroupe);

  const result = !existeValeurEnDouble(lesProduits);
  console.log("result=" + result);
  return result;

}
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = isColorful;


console.log(isColorful(3245));
