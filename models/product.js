import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER(8,2),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inStock: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { timestamps: false }
);

export default Product;
