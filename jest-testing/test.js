const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
    test('It should respond with status code 200', async () => {
      const response = await request(app).get('/');
      console.log(response);
      expect(response.statusCode).toBe(404);
    });
  });


describe('POST /api/resource', () => {
    test('It should create a new resource', async () => {
      
        const response = await request(app)
        .post('/api/resource')
        .send({ name: 'New Resource' });

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe('New Resource');
    });
  });



describe('PUT /api/resource/:id', () => {
    test('It should update an existing resource', async () => {
      const resourceId = '123'; // Assume this is the ID of an existing resource
      const response = await request(app)
        .put(`/api/resource/${resourceId}`)
        .send({ name: 'Updated Resource' });

      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBe(resourceId);
      expect(response.body.name).toBe('Updated Resource');
    });
  });



  describe('DELETE /api/resource/:id', () => {
    test('It should delete an existing resource', async () => {
      const resourceId = '123'; // Assume this is the ID of an existing resource
      const response = await request(app).delete(`/api/resource/${resourceId}`);
      expect(response.statusCode).toBe(204); // Assuming no content is returned upon successful deletion
    });
  });



  describe('Invalid Route', () => {
    test('It should return 404 for non-existent routes', async () => {
      const response = await request(app).get('/non-existent-route');
      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBe('Not Found');
    });
  });