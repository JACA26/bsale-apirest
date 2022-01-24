
import { DataTypes } from "sequelize";
import db from "../db/connection";
import { ProductInstance } from "../interfaces/Product";
import { categoryModel } from "./categoryModel";

export const productModel = db.define<ProductInstance>("Product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    /* category: {
        type: DataTypes.INTEGER,
        allowNull: false
    } */
},{
    tableName: 'product',
    timestamps: false
});

// productModel.hasOne(categoryModel, { foreignKey: 'category', sourceKey: 'id' });
categoryModel.hasMany(productModel, { foreignKey: 'category', sourceKey: 'id' });
productModel.belongsTo(categoryModel, { foreignKey: 'category'});