const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ error: err.message });
  };
  
  module.exports = errorMiddleware;
  