const ProductController = require("../controllers/product.controller");

module.exports = app => {
  app.get("/api/products", ProductController.findAllProducts);
  app.post("/api/product/new", ProductController.createProduct);
  app.get("/api", ProductController.index);
  // app.put("/api/users/update/:id", ProductController.updateExistingUser);
  // app.delete("/api/users/delete/:id", ProductController.deleteAnExistingUser);
};