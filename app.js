import express from 'express';
import sequelize from './config/database.js';
import taskRoutes from './routes/tasks.js';
import productRoutes from './routes/products.js';

const app = express()
app.use(express.json())

app.use('/tasks', taskRoutes)
app.use('/products', productRoutes)

const port = 3000;
sequelize.sync({ force: true })
    .then(() => {
        console.info('✅ Database Synchronized');
        app.listen(port, () => {
            console.info(`✅ Server running at http://localhost:${port}/`);
        });
    })
    .catch(err => {
        console.error('Database Problem:', err);
    });

export default app;