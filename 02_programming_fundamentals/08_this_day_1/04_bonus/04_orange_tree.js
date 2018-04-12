// See Sparta courses for the exercise summary

const orangeTree =  {
  height: 0,
  age: 0,
  oranges: 0,
  alive: true,

  pickAnOrange: function() {
    if (this.oranges === 0) {
      return false;
    } else {
      this.oranges--;
      return true;
    }
  },

  ageOneYear: function() {
    this.age++;
    if (this.age < 10) {
      this.height += 25;
    } else if (this.age < 20) {
      this.height += 10;
    }
    this.oranges = 0;
    if (this.age >= 5) {
      if (this.age < 10) {
        this.oranges = 10;
      } else if (this.age < 20) {
        this.oranges = 20;
      } else if (this.age < 40) {
        this.oranges = 5;
      }
    }

    if (this.age>50 && this.age<100) {
      this.alive = false;
    }
    
    return this;
  },

  seed: function() {
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    this.alive = true;
    return this;
  },

  print: function() {
    console.log(`age: ${this.age}, alive: ${this.alive}, height: ${this.height}, oranges: ${this.oranges}`);
  }
};

orangeTree.seed();
orangeTree.print();
for (let i=1; i<=110; i++) {
  orangeTree.ageOneYear();
  orangeTree.print();
}

module.exports = orangeTree;
