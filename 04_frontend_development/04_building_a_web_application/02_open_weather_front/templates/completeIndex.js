const fs = require("fs");
const path = require("path");


function completeIndex(weather) {
  const fileToRead = path.resolve(".", "public/index.html");

  const html = fs.readFileSync(fileToRead).toString();
  let htmlRes = html.replace("{{town}}", weather.name);
  htmlRes = htmlRes.replace("{{temperature}}", weather.main.temp);
  if (weather.main.temp > 15) {
    htmlRes = htmlRes.replace("{{imgWeather}}", "<img src='/sun.jpg' style='width:200px'/>");
  } else {
    htmlRes = htmlRes.replace("{{imgWeather}}", "<img src='/cold.jpg' style='width:200px'/>");
  }
  return htmlRes;
}

module.exports = completeIndex;
