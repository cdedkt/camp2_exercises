function greet(name) {
  let greetingName = name;

  if (!name) {
    greetingName = "World";
  }

  return `Hello ${greetingName.toUpperCase()}!`;
}

console.log(greet("christophe"));
console.log(greet(""));

module.exports = greet;
