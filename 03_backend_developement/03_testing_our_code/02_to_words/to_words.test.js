const toWords = require("./to_words");

test("split with space only", () => {
  const result = toWords("split with space only");
  expect(result).toEqual(["split","with","space","only"]);
});

test("split with different separators", () => {
  const result = toWords("split.with?different!separators ,OK");
  expect(result).toEqual(["split","with","different","separators","OK"]);
});

test("I'm so good", () => {
  const result = toWords("I'm so good");
  expect(result).not.toEqual(["I'm","so","good"]);
});
