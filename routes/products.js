import express from 'express';
import Product from '../models/product.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByPk(id)
        if (product) {
            await product.update(req.body)
            res.json(product)
        } else {
            res.status(404).json({ error: 'Product not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByPk(id)
        if (product) {
            await product.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'Product not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


export default router;