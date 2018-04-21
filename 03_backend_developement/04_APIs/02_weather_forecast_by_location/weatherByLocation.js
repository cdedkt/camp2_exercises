const request = require("request");

function callWeatherByLatitudeAndLongitude(latitude, longitute, callback) {
  const appid = process.env.WEATHER_KEY;
  const url = process.env.WEATHER_URL;

  request(
    {
      url: `${url}?lat=${latitude}&lon=${longitute}&appid=${appid}&units=metric`,
      method: "GET"
    },
    function(error, response, result) {
      if (error || (response && response.statusCode != 200)) {
        console.log("ERROR API OPENWEATHERMAP");
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
      }
      callback(result);
    }
  );
}

function callWeatherByZipcode(zipCode, countryCode, callback) {
  const appid = process.env.WEATHER_KEY;
  const url = process.env.WEATHER_URL;

  request(
    {
      url: `${url}?zip=${zipCode},${countryCode}&appid=${appid}&units=metric`,
      method: "GET"
    },
    function(error, response, result) {
      if (error || (response && response.statusCode != 200)) {
        console.log("ERROR API OPENWEATHERMAP");
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
      }
      callback(result);
    }
  );
}

function displayResult(result) {
  resObj = JSON.parse(result);
  const temp = resObj.main.temp;
  console.log(temp + "°C");
}

function weatherByLatitudeAndLongitude(latitude, longitute) {
  callWeatherByLatitudeAndLongitude(latitude, longitute, displayResult);
}

function weatherByZipcode(zipCode, countryCode) {
  callWeatherByZipcode(zipCode, countryCode, displayResult);
}


//weatherByLatitudeAndLongitude(32.661343, 51.680374);
//weatherByZipcode("59000", "fr");


module.exports = {
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude,
  weatherByZipcode: weatherByZipcode
};
