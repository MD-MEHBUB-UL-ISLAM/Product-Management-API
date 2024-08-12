const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/database');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Authentication', () => {
  it('should register a new user', async () => {
    const res = await request(app).post('/api/register').send({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should login an existing user', async () => {
    const res = await request(app).post('/api/login').send({
      email: 'john@example.com',
      password: 'password',
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
