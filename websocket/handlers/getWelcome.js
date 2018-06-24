function getWelcome(request, result) {
  result.json({msg: "welcome"});
}

module.exports = getWelcome;
