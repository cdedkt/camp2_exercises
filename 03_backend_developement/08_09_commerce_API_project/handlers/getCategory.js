
const categories = require("../entities/categories");

function getCategory(request, result) {
  categories.findById(request.params.id, function(toReturn) {
    result.json(toReturn);
  });
}

module.exports = getCategory;
