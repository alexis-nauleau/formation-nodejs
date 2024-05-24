import express from "express";


import indexRoutes from "./routes/index.js";
import aboutRoutes from "./routes/about.js";
import productRoutes from "./routes/products.js";
import contactRoutes from "./routes/contact.js";
import tasksRoutes from "./routes/tasks.js";

import os from "os";

import sequelize from "./config/database.js";


const app = express();
// Middleware pour parser le JSON
app.use(express.json());

// Utiliser les routes
app.use("/", indexRoutes);
app.use("/", aboutRoutes);
app.use("/products", productRoutes);
app.use("/", contactRoutes);
app.use("/tasks", tasksRoutes);

const port = 3000;  


sequelize
  .sync() //connexion
  .then(() => {
    console.info("Database connected");
    app.listen(port, () => {
      console.log(`Server running at <http://localhost:${port}/>`);

    });
  });
export default app;
//export default Task

// console.log('Platform:', os.platform());
// console.log('CPU architecture:', os.arch());
// console.log('Number of CPUs:', os.cpus().length);
// console.log('Returns the amount of free system memory in bytes as an integer.:', os.freemem());
