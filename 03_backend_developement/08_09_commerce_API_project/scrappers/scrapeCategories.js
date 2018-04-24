const request = require("request");
const categories = require("../entities/categories");

//https://decath-product-api.herokuapp.com/categories

function scrapeCategories(callback) {
  request(
    {
      url: `${process.env.URLDECATHPRODUCT}/categories`,
      method: "GET"
    },
    function(error, response, result) {
      if (error || (response && response.statusCode !== 200)) {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
      } else {
        callback(JSON.parse(result));
      }
    }
  );
}

function displayResult(resultObject) {
  console.log(resultObject);
}

scrapeCategories(categories.insertCategories);
