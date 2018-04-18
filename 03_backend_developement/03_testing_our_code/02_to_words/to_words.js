function toWords(sentence) {
  const allWords = sentence.split(/[.?!, :]+/);

  return allWords.filter(word => word !== "");
}

console.log(toWords("I'm so good"));

module.exports = toWords;
