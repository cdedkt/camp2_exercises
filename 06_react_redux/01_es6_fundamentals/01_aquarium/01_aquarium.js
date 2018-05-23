let globalId = 1000;

class Aquarium {
  constructor(fishes, algaes) {
    this.fishes = fishes;
    this.algaes = algaes;
  }

  addFish(fish) {
    this.fishes.push(fish);
  }

  addAlgae(algae) {
    this.algaes.push(algae);
  }

  eatOneAlgaeBy(fish) {
    if (this.algaes.length > 0) {
      const algeaEaten = this.algaes.splice(0, 1)[0];
      console.log("algea ", algeaEaten.getInformation(), " eaten by ", fish.getInformation());
      return true;
    } else {
      return false;
    }
  }

  eatOneFishBy(fish) {
    if (this.fishes.length === 1) {
      // last fish
      return false;
    } else {
      let fishEaten = "";
      if (this.fishes[0].id !== fish.id) {
        fishEaten = this.fishes.splice(0, 1)[0];
      } else {
        //un poisson ne se mange pas lui meme, on mange le suivant
        fishEaten = this.fishes.splice(1, 1)[0];
      }
      console.log("fish ", fishEaten.getInformation(), " eaten by ", fish.getInformation());
    }
  }

  passTime() {
    console.log("\n>>> pastTime BEFORE");
    console.log("Number of algaes : ", this.algaes.length);
    this.fishes.forEach(fish => {
      console.log("fish", fish.getInformation());
    });

    this.fishes.forEach(fish => {
     fish.eat(this);
    });

    // this.fishes.forEach(function(fish) {
    //   fish.eat(this);
    // });

    console.log(">>> pastTime AFTER");
    console.log("Number of algaes : ", this.algaes.length);
    this.fishes.forEach(fish => {
      console.log("fish", fish.getInformation());
    });

  }

  endTurn() {
    while (this.fishes.length > 1) {
      this.passTime();
    }
  }
}

class Fish {
  constructor(name, sex, isVegan) {
    this.name = name;
    this.sex = sex;
    this.isVegan = isVegan;
    this.id = ++globalId;
  }

  getInformation() {
    return "-" + this.name + "- " + this.sex + " " + (this.isVegan ? "vegan" : "carnivor") + " id:" + this.id;
  }

  eat(aquarium) {
    if (this.isVegan) {
      aquarium.eatOneAlgaeBy(this);
    } else {
      aquarium.eatOneFishBy(this)
    }
  }
}

class Algae {
  constructor(size) {
    this.size = size;
  }

  getInformation() {
    return "-" + this.size + "-";
  }
}

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
