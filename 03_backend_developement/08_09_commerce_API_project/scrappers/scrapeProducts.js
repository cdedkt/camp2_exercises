const request = require("request");
const products = require("../entities/products");

//https://decath-product-api.herokuapp.com/products

function scrapeProducts(callback) {
  request(
    {
      url: `${process.env.URLDECATHPRODUCT}/products`,
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

scrapeProducts(products.insertProducts);
