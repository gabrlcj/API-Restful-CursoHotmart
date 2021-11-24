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

async function put(req, res) {
  const { id } = req.params

  const findProduct = await ProductsModel.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true }
  )

  res.send({
    message: 'success',
    findProduct,
  })
}

module.exports = {
  get,
  post,
  put,
}
