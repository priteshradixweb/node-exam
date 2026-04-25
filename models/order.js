import { DataTypes, where } from "sequelize";
import sequelize from "../services/db.js";

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'shipped', 'delivered)'),
        allowNull: false,
        defaultValue: "pending"
    },
    totalPrice: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    }
},
    {
        tableName: 'orders',
        underscored: true,
    }
);

export default Order;