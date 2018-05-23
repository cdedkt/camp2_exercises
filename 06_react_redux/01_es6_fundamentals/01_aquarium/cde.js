const aquarium =  require("./01_aquarium.js");


const newCarnFish = new aquarium.fish("carn 1", "M", 0);
const newVeganFish = new aquarium.fish("vegan 1", "M", 1);

const newAlgae = new aquarium.algae(1);
const newAquarium = new aquarium.aquarium([newVeganFish, newCarnFish], [newAlgae]);

newAquarium.addAlgae(new aquarium.algae(2));
newAquarium.addAlgae(new aquarium.algae(3));
newAquarium.addFish(new aquarium.fish("carn 2", "M", 0));
newAquarium.addFish(new aquarium.fish("carn 3", "M", 0));
newAquarium.addFish(new aquarium.fish("vegan 2", "M", 1));

newAquarium.endTurn();
