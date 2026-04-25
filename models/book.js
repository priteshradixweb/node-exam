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
    },
    deletedAt: {
        type: DataTypes.DATE,
    },
    createdAt: {
        type: DataTypes.DATE,
    }
},
    {
        tableName: 'books',
        underscored: true,
        defaultScope: {
            where: {
                deletedAt: null
            }
        }
    }
);

export default Book;