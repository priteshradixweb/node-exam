import { DataTypes, where } from "sequelize";
import sequelize from "../services/db.js";

const OrderAddress = sequelize.define('OrderAddress', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Address1: {
        type: DataTypes.STRING,
    },
    Address2: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    postalCode: {
        type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
    },
    address_type: {
        type: DataTypes.STRING,
        defaultValue: 'shipping'
    },
},
    {
        tableName: 'order_address',
        underscored: true,
    }
);

export default OrderAddress;