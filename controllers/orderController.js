const Order = require('../models/Order');
const Product = require('../models/Product');

const createOrder = async (req, res) => {
  const { productIds } = req.body;
  const products = await Product.findAll({ where: { id: productIds } });

  if (!products.length) return res.status(400).json({ error: 'Invalid product selection' });

  const totalAmount = products.reduce((acc, product) => acc + product.price, 0);

  const order = await Order.create({
    userId: req.user.id,
    totalAmount,
  });

  await order.addProducts(products);
  res.status(201).json(order);
};

const getAllOrders = async (req, res) => {
  const orders = await Order.findAll({
    where: { userId: req.user.id },
    include: Product,
  });
  res.status(200).json(orders);
};

const getOrderById = async (req, res) => {
  const order = await Order.findOne({
    where: { id: req.params.id, userId: req.user.id },
    include: Product,
  });

  if (!order) return res.status(404).json({ error: 'Order not found' });

  res.status(200).json(order);
};

module.exports = { createOrder, getAllOrders, getOrderById };
