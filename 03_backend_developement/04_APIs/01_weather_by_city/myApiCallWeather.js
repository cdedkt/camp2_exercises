const request = require("request");

function makeARequest(city, callback) {
  const appid = process.env.WEATHER_KEY;
  const url = process.env.WEATHER_URL;

  request(
    {
      url: `${url}?q=${city}&appid=${appid}&units=metric`,
      method: "GET",
      /*headers: {
        Authorization: "bearer <TOKEN>"
      }*/
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

module.exports = makeARequest;
