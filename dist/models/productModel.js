"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const categoryModel_1 = require("./categoryModel");
exports.productModel = connection_1.default.define("Product", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    url_image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    discount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    /* category: {
        type: DataTypes.INTEGER,
        allowNull: false
    } */
}, {
    tableName: 'product',
    timestamps: false
});
// productModel.hasOne(categoryModel, { foreignKey: 'category', sourceKey: 'id' });
categoryModel_1.categoryModel.hasMany(exports.productModel, { foreignKey: 'category', sourceKey: 'id' });
exports.productModel.belongsTo(categoryModel_1.categoryModel, { foreignKey: 'category' });
//# sourceMappingURL=productModel.js.map