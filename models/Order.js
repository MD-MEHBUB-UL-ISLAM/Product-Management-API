const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Product = require('./Product');

const Order = sequelize.define('Order', {
  totalAmount: { type: DataTypes.FLOAT, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'pending' },
}, {
  timestamps: true,
});

Order.belongsTo(User, { foreignKey: 'userId' });
Order.belongsToMany(Product, { through: 'OrderProducts', foreignKey: 'orderId' });

module.exports = Order;
