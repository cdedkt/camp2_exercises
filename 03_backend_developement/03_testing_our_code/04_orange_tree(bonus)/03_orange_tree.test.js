const orangeTree = require("./03_orange_tree");


test("it should be seed", () => {
  orangeTree.seed();
  expect(orangeTree.alive).not.toBe(false);
  expect(orangeTree.height).toBe(0);
  expect(orangeTree.age).toBe(0);
  expect(orangeTree.oranges).toBe(0);
});

test("it should be older each year", () => {
  orangeTree.seed();
  for (let i=1; i<=110; i++) {
    orangeTree.ageOneYear();
    expect(orangeTree.age).toBe(i);
  }
});

test("it should produce 20 oranges beetween from 10 until 20", () => {
  orangeTree.seed();
  for (let i=1; i<=100; i++) {
    orangeTree.ageOneYear();
    if (orangeTree.age>=10 && orangeTree.age<20) {
      expect(orangeTree.oranges).toBe(20);
    }
  }
});

test("it should grow from 25 cm per year to 10 years", () => {
  orangeTree.seed();
  for (let i=1; i<=110; i++) {
    orangeTree.ageOneYear();
    if (orangeTree.age<10) {
      expect(orangeTree.height).toBe(25*orangeTree.age);
    }
  }
});

test("it should grow from 10 cm per year from 10 years to 20 years", () => {
  orangeTree.seed();
  for (let i=1; i<=110; i++) {
    orangeTree.ageOneYear();
    if (orangeTree.age>=10 && orangeTree.age<20) {
      expect(orangeTree.height).toBe((25*9)+(orangeTree.age-9)*10);
    }
  }
});

test("it should not grow after 20 years", () => {
  let maxSize = 0;
  orangeTree.seed();
  for (let i=1; i<=110; i++) {
    orangeTree.ageOneYear();
    if (orangeTree.age===20) {
      maxSize = orangeTree.height;
    }
    if (i>20) {
      expect(orangeTree.height).toBe(maxSize);
    }
  }
});

test("it should be possible to pick an orange between 5 and 40 years", () => {
  orangeTree.seed();
  for (let i=1; i<=110; i++) {
    orangeTree.ageOneYear();
    if (orangeTree.age>=5 && orangeTree.age<40) {
      expect(orangeTree.pickAnOrange()).toBe(true);
    } else {
      expect(orangeTree.pickAnOrange()).toBe(false);
    }
  }
});

test("it should be alive before 50 years", () => {
  orangeTree.seed();
  for (let i=1; i<=110; i++) {
    orangeTree.ageOneYear();
    if (orangeTree.age < 50) {
      expect(orangeTree.alive).toBe(true);
    }
  }
});

test("it should be dead after 100 years", () => {
  orangeTree.seed();
  for (let i=1; i<=110; i++) {
    orangeTree.ageOneYear();
    if (orangeTree.age >= 100) {
      expect(orangeTree.alive).toBe(false);
    }
  }
});

test("it should be dead once between 50 and 100 years", () => {
  let isDead = false;
  orangeTree.seed();
  for (let i=1; i<=110; i++) {
    orangeTree.ageOneYear();
    if (orangeTree.age >= 50 && orangeTree.age<100) {
      if (!orangeTree.alive) {
        isDead = true;
      }
    }
  }
  expect(isDead).toBe(true);
});
