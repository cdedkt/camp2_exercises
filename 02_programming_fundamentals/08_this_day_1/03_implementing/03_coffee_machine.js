// See Sparta courses for the exercise summary

// Coffee Machine usage. Insert your code above this comment

const machine = {
  litersOfCoffee: 0,
  nbLiterForExpresso: 0.08,
  nbLiterForLongCofffee: 0.15,

  fillWithLitersOfCoffee: function(nbLiter) {
    this.litersOfCoffee += nbLiter;
    return this;
  },

  expresso: function() {
    if (this.litersOfCoffee >= this.nbLiterForExpresso) {
      this.litersOfCoffee -= this.nbLiterForExpresso;
      return true;
    } else {
      return false;
    }
  },

  longCoffee: function() {
    if (this.litersOfCoffee >= this.nbLiterForLongCofffee) {
      this.litersOfCoffee -= this.nbLiterForLongCofffee;
      return true;
    } else {
      return false;
    }
  }

};


machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee); // => 0.02
console.log(machine.expresso()); // => false

module.exports = machine;
