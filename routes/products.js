// import express from "express";
// import products from "../data/products.js";

// const router = express.Router();

// router.get("/products", (req, res) => {
//   res.json(products);
// });

// router.get("/products/:id", (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find((p) => p.id === productId);
//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ error: "Product not found" });
//   }
// });

// export default router;
import express from "express";
import Product from "../models/product.js";
const router = express.Router();

router.get("/", async (req, res) => {  //Récupérer tous les produits
  try {
    const products = await Product.findAll();
    res.json(products);
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
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {  //Mettre à jour un produit par ID
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (product) {
      await product.update(req.body);
      res.json(product);
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
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 
