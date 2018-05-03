const weather = require("../services/weather");
const completeIndex = require("../templates/completeIndex");

function getWeatherByCity2(request, result) {
  const town = request.query.city;

  weather.weatherByCityName(town)
    .then((weather) => {
      result.send(completeIndex(weather));
    });
}

module.exports = getWeatherByCity2;
