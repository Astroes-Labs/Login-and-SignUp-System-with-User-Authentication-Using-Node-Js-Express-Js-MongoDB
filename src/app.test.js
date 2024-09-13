const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./index'); // Import your express app

beforeAll(async () => {
  // Set NODE_ENV to 'test' for testing
  process.env.NODE_ENV = 'test';
});

afterAll(async () => {
  // Close database connection after tests
  await mongoose.connection.close();
});

describe('GET /', () => {
  it('should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
