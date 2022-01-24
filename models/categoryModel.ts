
import { DataTypes } from "sequelize";
import db from "../db/connection";
import { CategoryInstance } from "../interfaces/Category";

export const categoryModel = db.define<CategoryInstance>("Category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    tableName: 'category',
    timestamps: false
});
