const getHome = require("./handlers/getHome");
const getMenu = require("./handlers/getMenu");
const getWeatherByCity = require("./handlers/getWeatherByCity");
const getWeatherByCity2 = require("./handlers/getWeatherByCity2");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", getHome);
app.get("/menu", getMenu);
app.get("/weatherbycity/:city", getWeatherByCity);
app.get("/weatherbycity2", getWeatherByCity2);

app.get("*", function(request, result) {
  result.send("page not found !!");
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
