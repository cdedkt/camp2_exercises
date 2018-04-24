const insertBrands = require("./insertBrands");
const insertCategories = require("./insertCategories");
const insertProducts = require("./insertProducts");
const insertLienCategoriesProducts = require("./insertLienCategoriesProducts");

module.exports = {
  insertBrands: insertBrands,
  insertCategories: insertCategories,
  insertProducts: insertProducts,
  insertLienCategoriesProducts: insertLienCategoriesProducts,
  getAllCategories: getAllCategories
}
