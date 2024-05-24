import sequelize from '../config/database.js';
const baseUrl = 'http://localhost:3000';

const product = {
    id:1,
    name: 'Headphones 🎧',
    description: 'Headphones 🎧',
    price: 199.99,
    inStock: false
};
const updatedProduct = {
    name: 'Updated Tablet 📱',
    description: 'Updated Tablet 📱',
    price: 299.99,
    inStock: false
};

describe('Products API', () => {
    afterAll(async () => await sequelize.close())

    test('GET /products - should return all products', async () => {
        const response = await fetch(`${baseUrl}/products`);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
    });

    test('POST /products - should create a new product', async () => {
        const response = await fetch(`${baseUrl}/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        expect(response.status).toBe(201);
        expect(data.name).toBe(product.name);
        expect(data.price).toBe(product.price);
        expect(data.inStock).toBe(false);
    });

    test('PUT /products/:id - should update an existing product', async () => {
        const response = await fetch(`${baseUrl}/products/1`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedProduct)
        });
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data.name).toBe('Updated Tablet 📱');
        expect(data.price).toBe(299.99);
        expect(data.inStock).toBe(false);
    });

    test('DELETE /products/:id - should delete an existing product', async () => {
        const response = await fetch(`${baseUrl}/products/1`, { method: 'DELETE' });
        expect(response.status).toBe(204);
    });
});
