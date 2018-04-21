const myApiCallWeather = require("./myApiCallWeather");

function displayResult(result) {
  resObj = JSON.parse(result);
  const temp = resObj.main.temp;
  console.log(temp + "°C");
}

function weatherByCityName(city) {
  myApiCallWeather(city, displayResult);
}

module.exports = weatherByCityName;
