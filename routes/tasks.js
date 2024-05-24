import express from 'express';
import Task from '../models/task.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newTask = await Task.create(req.body); // {title,completed}
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findByPk(id)
        if (task) {
            await task.update(req.body)
            res.json(task)
        } else {
            res.status(404).json({ error: 'Task not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findByPk(id)
        if (task) {
            await task.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'Task not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


export default router;