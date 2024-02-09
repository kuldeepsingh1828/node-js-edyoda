/users         ---- GET
/users/create  ---- POST and data
/users/${id}   ---- PUT and Data
/users/${id}   ---- DELETE


create a CRUD based application for users
use websocket to perform CRUD
testing on same application


















npm install jest supertest --save-dev


Test Case 1: Test GET Request to Root Path:
This test case ensures that the root path of the application returns a status code of 200.


describe('GET /', () => {
  test('It should respond with status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
Test Case 2: Test POST Request to Create a Resource:
This test case checks if a POST request to a specific route creates a new resource successfully.


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


Test Case 3: Test PUT Request to Update a Resource:
This test case verifies if a PUT request to update an existing resource returns the updated resource.


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
Test Case 4: Test DELETE Request to Remove a Resource:
This test case checks if a DELETE request to delete a resource removes it successfully.


describe('DELETE /api/resource/:id', () => {
  test('It should delete an existing resource', async () => {
    const resourceId = '123'; // Assume this is the ID of an existing resource
    const response = await request(app).delete(`/api/resource/${resourceId}`);
    expect(response.statusCode).toBe(204); // Assuming no content is returned upon successful deletion
  });
});
Test Case 5: Test Error Handling for Invalid Route:
This test case ensures that accessing an invalid route returns a proper error response.


describe('Invalid Route', () => {
  test('It should return 404 for non-existent routes', async () => {
    const response = await request(app).get('/non-existent-route');
    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe('Not Found');
  });
});