import { DataTypes, where } from "sequelize";
import sequelize from "../services/db.js";

const BookImage = sequelize.define('BookImage', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fileName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
    },
    uploadDate: {
        type: DataTypes.DATE,
    },
    book_id: {
        type: DataTypes.INTEGER,
    }
},
    {
        tableName: 'book_images',
        underscored: true,
    }
);

export default BookImage;