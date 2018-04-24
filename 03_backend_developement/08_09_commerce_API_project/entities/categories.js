const PG = require("pg");

function findAll(callback) {
  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT * FROM categories",
    [],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        //console.log(result.rows);
        callback(result.rows);
      }
      client.end();
    }
  );
}

function findById(id, callback) {
  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT * FROM categories where id=$1::uuid",
    [id],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        //console.log(result.rows);
        callback(result.rows);
      }
      client.end();
    }
  );
}


function getProductsFromCategory(id, callback) {
  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT p.* FROM products p inner join lien_categories_products lcp on lcp.product_id = p.id where lcp.categorie_id=$1::uuid",
    [id],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        //console.log(result.rows);
        callback(result.rows);
      }
      client.end();
    }
  );
}

function insertCategories(categories) {
  console.log("INSERT CATEGORIES : " + categories.length + " lines have to be inserted.");
  const client = new PG.Client();
  client.connect();

  let indice = 0;
  insertNextCategorie(client, categories, indice);
}

function insertNextCategorie(client, categories, indice) {
  client.query(
    "INSERT INTO categories (id, decathlon_id, label) values ($1::uuid, $2::integer, $3::varchar)",
    [categories[indice].id, categories[indice].decathlon_id, categories[indice].label],
    function(error, result) {
      if (error) {
        console.warn(error);
        client.end();
      } else {
        indice++;
        if (indice<categories.length) {
          insertNextCategorie(client, categories, indice);
        } else {
          console.log("INSERT CATEGORIES OK : " + indice + " lines inserted.");
          client.end();
        }
      }
    }
  );
}

module.exports = {
  findAll: findAll,
  findById: findById,
  getProductsFromCategory: getProductsFromCategory,
  insertCategories: insertCategories
}
