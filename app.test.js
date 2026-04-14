const request = require('supertest');
const express = require('express');
const app = express(); 
app.get('/status', (req, res) => res.status(200).json({ status: 'online' }));

describe('GET /status', () => {
  it('Deve retornar status 200 e confirmar que a API está online', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'online');
  });
});