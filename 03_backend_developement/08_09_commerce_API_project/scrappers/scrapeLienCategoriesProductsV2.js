const request = require("request");
const PG = require("pg");

const client = new PG.Client();
client.connect();

let counter = 0;
const productCategoryList = [];

request(
  { url: "https://decath-product-api.herokuapp.com/categories" },
  function(error, response, body) {
    const categories = JSON.parse(body);
    categories.forEach(function(category) {
      request(
        { url: `https://decath-product-api.herokuapp.com/categories/${category.id}/products` },
        function( error, response, body) {
          const products = JSON.parse(body);
          products.forEach(function(product) {
            productCategoryList.push({
              categoryId: category.id,
              productId: product.id
            });
          });
          counter++;
          if (counter >= categories.length) {
            counter = 0;
            productCategoryList.forEach(function(productCategory) {
              client.query(
                "INSERT INTO lien_categories_products (category_id, product_id) VALUES ($1::uuid, $2::uuid)",
                [productCategory.categoryId, productCategory.productId],
                function(error, result) {
                  if (error) {
                    console.warn(error);
                  } else {
                    counter++;
                    if (counter >= productCategoryList.length) {
                      client.end();
                    }
                  }
                }
              );
            });
          }
        }
      );
    });
  }
);
