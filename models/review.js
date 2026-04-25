import { DataTypes, where } from "sequelize";
import sequelize from "../services/db.js";

const Review = sequelize.define('Review', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
    rating: {
        type: DataTypes.NUMBER,
    },
    comment: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    }
},
    {
        tableName: 'reviews',
        underscored: true,
    }
);

export default Review;