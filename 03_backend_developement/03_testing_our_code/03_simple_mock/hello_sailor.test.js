const helloSailor = require("./hello_sailor");

test("it should call console.log one name", () => {
  console.log = jest.fn();

  helloSailor("Christophe");

  expect(console.log).toHaveBeenCalled();
  expect(console.log).toHaveBeenCalledWith("Howdy Christophe!");
});


test("it should call console.log without name", () => {
  console.log = jest.fn();

  helloSailor();

  expect(console.log).toHaveBeenCalled();
  expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});
