const fetch = require("node-fetch");

const productId = "efe288cb-fb63-4b23-b8df-529f04b8b02b";

return fetch(
  `https://decath-product-api.herokuapp.com/products/${productId}`,
  {method: "GET"}
)
  .then((response) => response.json())
  .then((product) => {
    console.log(product);
    return product.title;
  })
  .then((title) => {
    console.log(title);
  })
  .catch((error) => {
    console.warn(error);
  });
