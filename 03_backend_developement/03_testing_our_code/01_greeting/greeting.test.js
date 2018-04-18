const greet = require("./greeting");

test("greet christophe", () => {
  const result = greet("christophe");
  expect(result).toBe("Hello CHRISTOPHE!");
});

test("greet world", () => {
  const result = greet("");
  expect(result).toBe("Hello WORLD!");
});
