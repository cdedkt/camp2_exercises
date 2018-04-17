const request = require("request");

function simpleGet(callback) {
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function simpleGetWithParams(callback) {
  request
    .get("https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis")
    .on("data", data => callback(JSON.parse(data).args));
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}

function validateTimestamp(callback) {
  const currentDate = new Date();
  request(
    {
      url: "https://postman-echo.com/time/valid?timestamp=" + formatDate(currentDate),
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}


function echo(param) {
  console.log(param);
  return param;
}

//simpleGet(echo);
validateTimestamp(echo);

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
}
