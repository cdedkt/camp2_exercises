// See Sparta courses for the exercise summary

const car = {
  distance: 0,
  speed: 0,

  start: function() {
    this.distance = 0;
    return this;
  },
  showDistance: function() {
    console.log(this.distance + " Km");
    //return `Hello! I'm ${this.fullname()} and I'm ${this.age}`;
  },
  changeSpeed: function(speed) {
    this.speed = speed;
    return this;
  },
  drive: function(minutes) {
    this.distance = this.distance + this.speed * minutes / 60;
    return this;
  }
};

car.start().changeSpeed(130).drive(42).showDistance();

module.exports = car;
