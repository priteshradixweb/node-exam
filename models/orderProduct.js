import { DataTypes, where } from "sequelize";
import sequelize from "../services/db.js";

const OrderProduct = sequelize.define('OrderProduct', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
    },
    bookTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bookAuthor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unitPrice: {
        type: DataTypes.STRING,
    },
    quantity: {
        type: DataTypes.STRING,
    },
    lineTotal: {
        type: DataTypes.STRING,
    },
},
    {
        tableName: 'order_products',
        underscored: true,
    }
);

export default OrderProduct;