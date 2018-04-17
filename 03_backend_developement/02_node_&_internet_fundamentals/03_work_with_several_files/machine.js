const container = require("./container");

const machine = {
  nbLiterForExpresso: 0.08,
  nbLiterForLongCofffee: 0.15,

  fillWithLitersOfCoffee: function(nbLiter) {
    container.putLitersOfCoffee(nbLiter);
    return this;
  },

  expresso: function() {
    return container.consumeLitersOfCoffee(this.nbLiterForExpresso);
  },

  longCoffee: function() {
    return container.consumeLitersOfCoffee(this.nbLiterForLongCofffee);
  }

};


machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()); // => true
console.log(machine.longCoffee()); // => true
// some more people ordering coffee here
console.log(machine.litersOfCoffee); // => 0.02
console.log(machine.expresso()); // => false

module.exports = machine;
