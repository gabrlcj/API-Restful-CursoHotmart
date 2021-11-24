const ProductsModel = require('../models/products')

async function get(req, res) {
  const { id } = req.params

  const productId = id ? { _id: id } : null

  const products = await ProductsModel.find(productId)

  res.send(products)
}

async function post(req, res) {
  const { name, brand, price } = req.body

  const newProduct = new ProductsModel({
    name,
    brand,
    price,
  })

  newProduct.save()

  res.send({
    message: 'success',
  })
}

module.exports = {
  get,
  post,
}
