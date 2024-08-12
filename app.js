const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const { swaggerUi, swaggerDocs } = require('./swagger');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', authRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

app.use(errorMiddleware);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server is running on port 3000'));
});
require('dotenv').config();
