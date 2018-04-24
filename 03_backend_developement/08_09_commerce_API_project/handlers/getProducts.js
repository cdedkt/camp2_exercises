
const products = require("../entities/products");

function getProducts(request, result) {
  products.findAll(function(toReturn) {
    result.json(toReturn);
  });
}

module.exports = getProducts;
