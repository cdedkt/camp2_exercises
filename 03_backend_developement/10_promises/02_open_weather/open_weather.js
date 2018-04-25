const fetch = require("node-fetch");

function weatherByCityName(city) {
  const appid = process.env.WEATHER_KEY;
  const url = process.env.WEATHER_URL;

  return fetch(
    `${url}?q=${city}&appid=${appid}&units=metric`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((weather) => {
      return weather.main.temp + "°C";
    })
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
    .then((weather) => {
      return weather.main.temp + "°C";
    })
    .catch((error) => {
      console.warn(error);
    });
}

weatherByCityName("London")
  .then((temp) => {
      console.log(temp);
  });

weatherByLatitudeAndLongitude(32.661343, 51.680374)
  .then(console.log);
