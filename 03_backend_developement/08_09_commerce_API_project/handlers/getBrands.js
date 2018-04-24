
const brands = require("../entities/brands");

function getBrands(request, result) {
  brands.findAll(function(toReturn) {
    result.json(toReturn);
  });
}

module.exports = getBrands;
