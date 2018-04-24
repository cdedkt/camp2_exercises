
const products = require("../entities/products");

function getProduct(request, result) {
  products.findById(request.params.id, function(toReturn) {
    result.json(toReturn);
  });
}

module.exports = getProduct;
