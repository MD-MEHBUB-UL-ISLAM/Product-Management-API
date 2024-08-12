const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  const { page = 1, limit = 10, search, category } = req.query;
  const where = {};

  if (search) where.name = { [Op.like]: `%${search}%` };
  if (category) where.category = category;

  const products = await Product.findAll({
    where,
    offset: (page - 1) * limit,
    limit: parseInt(limit),
  });
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.status(200).json(product);
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create product' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    await product.update(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update product' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    await product.destroy();
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete product' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
