const ProductController = require("../controllers/product.controller");

module.exports = app => {
  app.get("/api/product", ProductController.findAllProducts);
  app.post("/api/products/new", ProductController.createProduct);
  app.get("/api", ProductController.index);
  app.get('/api/product/:id', ProductController.getProduct);
  app.put('/api/product/:id', ProductController.updateProduct);
  app.delete('/api/product/:id', ProductController.deleteProduct);
};