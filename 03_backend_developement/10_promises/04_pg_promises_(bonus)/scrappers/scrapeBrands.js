const fetch = require("node-fetch");
const brands = require("../entities/Brands");

//https://decath-product-api.herokuapp.com/brands

function scrapeBrands() {
  fetch(`${process.env.URLDECATHPRODUCT}/brands`,
    {
      method: "GET"
    })
  .then((response) => response.json())
  .then((brands) => {
     return brands.insertBrandsPromise(brands);
    })
  .catch((error) => {
      console.warn(error);
  });
}

scrapeBrands();
