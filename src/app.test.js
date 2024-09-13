const request = require('supertest');
const app = require('./index'); // Adjust the path to your app

describe('GET /', () => {
  it('should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
