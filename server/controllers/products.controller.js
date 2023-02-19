const { Products } = require("../models/product.model");

modules.exports.index = (req, res) => {
  response.json({
    message: "esto funciona"
  });
}

modules.exports.createaProduct = (req, res) => {
  const { titulo, precio, descripcion } = req.body;
  Products.create({
    titulo,
    precio,
    descripcion
  })
    .then(products => res.json(products))
    .catch(err => res.json(err));
}
