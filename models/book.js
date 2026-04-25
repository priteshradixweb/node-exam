import { DataTypes, where } from "sequelize";
import sequelize from "../services/db.js";

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DECIMAL,
    },
    stockQuantity: {
        type: DataTypes.INTEGER,
        column: 'stock_quantity'
    },
    deletedAt: {
        type: DataTypes.DATE,
        key: 'deleted_at'
    },
    createdAt: {
        type: DataTypes.DATE,
        key: 'created_at'
    }
},
    {
        tableName: 'books',
        underscored: true,
        scopes: {
            where: {
                deletedAt: null
            }
        }
    });

export default Book;