
const categories = require("../entities/categories");

function getCategories(request, result) {
  categories.findAll()
  .then((rows) => {
    result.json(rows);
  });
}

module.exports = getCategories;
