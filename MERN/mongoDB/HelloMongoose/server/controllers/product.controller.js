const Product = require('../models/product.model')
 
module.exports.index = (request, response) => {
  response.json({
     message: "Hello World"
  });
}

module.exports.createProduct = (request , response) => {
  Product.create(request.body)
  .then(newlyCreatedProduct => response.json(newlyCreatedProduct))
  .catch(err => response.json({ message: 'Something went wrong', error: err }));

}

module.exports.findAllProducts = (request , response) => {
  Product.find()
  .then(allDaProduts => response.json(allDaProduts))
  .catch(err => response.json({ message: 'Something went wrong', error: err }));
}
