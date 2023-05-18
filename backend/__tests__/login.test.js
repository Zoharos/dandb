require('dotenv').config();
const request = require('supertest');
const app = require('../src');
const { server } = require('../src');

describe('POST /authentication/login', () => {
  test('login as asd user', async () => {
    const userCredentials = JSON.stringify({ email: 'asd', password: '111' });
    const response = await request(app)
      .post('/api/authentication/login')
      .set('Content-Type', 'application/json')
      .send(userCredentials);
    expect(response.status).toBe(200);
    expect(response.text).toBe("login was successful");
  });
});

afterAll((done) => {
  server.close(done);
});