import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(8, 2),
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    inStock: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, { timestamps: false })

export default Product;