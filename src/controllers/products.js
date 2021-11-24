const ProductsModel = require('../models/products')

async function get(req, res) {
  const { id } = req.params

  const productId = id ? { _id: id } : null

  const products = await ProductsModel.find(productId)

  res.send(products)
}

module.exports = {
  get,
}
