
const categories = require("../entities/categories");

function getCategories(request, result) {
  categories.findAll(function(toReturn) {
    result.json(toReturn);
  });
}

module.exports = getCategories;
