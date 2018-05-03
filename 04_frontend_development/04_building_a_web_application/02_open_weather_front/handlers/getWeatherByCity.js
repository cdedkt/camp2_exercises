const weather = require("../services/weather");
const completeIndex = require("../templates/completeIndex");

function getWeatherByCity(request, result) {
  const town = request.params.city;

  weather.weatherByCityName(town)
    .then((weather) => {
      result.send(completeIndex(weather));
    });
}

module.exports = getWeatherByCity;
