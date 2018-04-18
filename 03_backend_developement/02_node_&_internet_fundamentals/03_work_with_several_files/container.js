let litersOfCoffee = 0;

function putLitersOfCoffee(numberOfLiters) {
  litersOfCoffee += numberOfLiters;
}

function consumeLitersOfCoffee(numberOfLiters) {
  if (litersOfCoffee < numberOfLiters) {
    return false;
  }
  litersOfCoffee -= numberOfLiters;
  return true;
}

module.exports = {
  putLitersOfCoffee: putLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee
};
