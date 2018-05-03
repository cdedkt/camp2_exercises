const fetch = require("node-fetch");

function weatherByCityName(city) {
  //const appid = process.env.WEATHER_KEY;
  //const url = process.env.WEATHER_URL;

  const appid = "bca262add92c9ed101258da9e961b2b3";
  const url = "http://api.openweathermap.org/data/2.5/weather";
  
  return fetch(
    `${url}?q=${city}&appid=${appid}&units=metric`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .catch((error) => {
      console.warn(error);
    });
}

function weatherByLatitudeAndLongitude(latitude, longitute) {
  const appid = process.env.WEATHER_KEY;
  const url = process.env.WEATHER_URL;

  return fetch(
    `${url}?lat=${latitude}&lon=${longitute}&appid=${appid}&units=metric`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .catch((error) => {
      console.warn(error);
    });
}

module.exports =  {
  weatherByCityName: weatherByCityName,
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude
}
