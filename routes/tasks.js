import express from "express";
import Task from "../models/task.js";
const router = express.Router();

router.get("/", async (req, res) => {  //Récupérer tous les produits
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => { //récupérer un produit par id
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/", async (req, res) => { //Ajouter un nouveau produit
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {  //Mettre à jour un produit par ID
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (task) {
      await task.update(req.body);
      res.json(task);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {//supprimer un élément par l'id
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 