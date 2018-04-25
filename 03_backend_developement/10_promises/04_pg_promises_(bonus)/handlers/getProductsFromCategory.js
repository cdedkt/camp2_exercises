
const categories = require("../entities/categories");

function getProductsFromCategory(request, result) {
  categories.getProductsFromCategory(request.params.id)
  .then((rows) => {
    result.json(rows);
  });
}

module.exports = getProductsFromCategory;
