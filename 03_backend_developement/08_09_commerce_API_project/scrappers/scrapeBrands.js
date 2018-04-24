const request = require("request");
const brands = require("../entities/Brands");

//https://decath-product-api.herokuapp.com/brands

function scrapeBrands(callback) {
  request(
    {
      url: `${process.env.URLDECATHPRODUCT}/brands`,
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

scrapeBrands(brands.insertBrands);
