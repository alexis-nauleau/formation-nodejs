
import sequelize from '../config/database.js';
const baseUrl = 'http://localhost:3000';
 
const task = {
    title: 'Headphones 🎧',
};
const updatedProduct = {
    title: 'Updated Tablet 📱',
};
 
describe('Products API', () => {
    afterAll(async () => await sequelize.close())
 
    test('GET /tasks - should return all tasks', async () => {
        const response = await fetch(`${baseUrl}/tasks`);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
    });
 
    test('POST /tasks - should create a new task', async () => {
        const response = await fetch(`${baseUrl}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        const data = await response.json();
        expect(response.status).toBe(201);
        expect(data.title).toBe(task.title);
    });
 
    // test('PUT /tasks/:id - should update an existing task', async () => {
    //     const response = await fetch(`${baseUrl}/tasks/1`, {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(updatedProduct)
    //     });
    //     const data = await response.json();
    //     expect(response.status).toBe(200);
    //     expect(data.title).toBe('Updated Tablet 📱');
    // });
 
    // test('DELETE /tasks/:id - should delete an existing task', async () => {
    //     const response = await fetch(`${baseUrl}/tasks/1`, { method: 'DELETE' });
    //     expect(response.status).toBe(204);
    // });
});