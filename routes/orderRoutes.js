const express = require('express');
const { createOrder, getAllOrders, getOrderById } = require('../controllers/orderController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/orders', authMiddleware, createOrder);
router.get('/orders', authMiddleware, getAllOrders);
router.get('/orders/:id', authMiddleware, getOrderById);

module.exports = router;
