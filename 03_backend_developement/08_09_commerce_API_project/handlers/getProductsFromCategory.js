
const categories = require("../entities/categories");

function getProductsFromCategory(request, result) {
  categories.getProductsFromCategory(request.params.id, function(toReturn) {
    result.json(toReturn);
  });
}

module.exports = getProductsFromCategory;
