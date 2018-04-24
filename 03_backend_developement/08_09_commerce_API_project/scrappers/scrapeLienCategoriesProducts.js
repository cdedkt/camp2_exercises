const request = require("request");
const categories = require("../entities/categories");
const lcp = require("../entities/lienCategoriesProducts");

//https://decath-product-api.herokuapp.com/categories/9f8d8840-e22c-496f-b865-f5014710e234/products

function transfertOneLienCategoriesProducts(categories, indice, done) {
  console.log("transfert one categorie = " + categories[indice].id + ", indice = " + indice);
  request(
    {
      url: `${process.env.URLDECATHPRODUCT}/categories/${categories[indice].id}/products`,
      method: "GET"
    },
    function(error, response, result) {
      if (error || (response && response.statusCode !== 200)) {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
      } else {
        const lienCategoriesProducts = JSON.parse(result);
        console.log("indice = " + indice + ", nb lienCategoriesProducts to insert = " + lienCategoriesProducts.length);
        //console.log(lienCategoriesProducts);
        lcp.insertLienCategoriesProducts(categories[indice].id, lienCategoriesProducts, done);
      }
    }
  );
}

function transfertAllLienCategoriesProducts(categories) {
  console.log("nb categories to transfert = " + categories.length);
  let indice = 0;

  const done = function() {
    indice++;
    if (indice < categories.length) {
      transfertOneLienCategoriesProducts(categories, indice, done);
    }
  };

  transfertOneLienCategoriesProducts(categories, indice, done);
}


categories.findAll(transfertAllLienCategoriesProducts);
