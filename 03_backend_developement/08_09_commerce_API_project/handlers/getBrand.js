
const brands = require("../entities/brands");

function getBrand(request, result) {
  brands.findById(request.params.id, function(toReturn) {
    result.json(toReturn);
  });
}

module.exports = getBrand;
