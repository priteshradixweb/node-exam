import { DataTypes } from "sequelize";
import sequelize from "../services/db.js";

const Book = sequelize.define('Book', {
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
},
    {
        tableName: 'users'
    });

export default Book;