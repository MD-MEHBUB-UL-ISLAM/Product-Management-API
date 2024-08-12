const { check, validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const productValidation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
  check('stockQuantity').isInt({ gt: 0 }).withMessage('Stock quantity must be a positive integer'),
  validate,
];

module.exports = { productValidation };
