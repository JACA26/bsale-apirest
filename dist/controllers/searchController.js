"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProducts = void 0;
const sequelize_1 = require("sequelize");
const categoryModel_1 = require("../models/categoryModel");
const productModel_1 = require("../models/productModel");
const pagination_1 = require("../utils/pagination");
const validations_1 = require("../utils/validations");
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const {page, size, order, filter, category} = req.query;
        let { page, size, orderby, ordermode, filter, category } = req.query;
        orderby = orderby;
        ordermode = ordermode;
        const order = {
            orderby,
            ordermode
        };
        //parsed attributes
        const pageNumber = (0, validations_1.convertToNumber)(page);
        const pageSize = (0, validations_1.convertToNumber)(size);
        const categoryNumber = (0, validations_1.convertToNumber)(category);
        const { orderby: orderBy, ordermode: orderMode } = (0, validations_1.validateOrderFormat)(order);
        //Clausula where
        let conditions = {};
        if (filter) {
            if (categoryNumber) {
                //category and filter exist
                conditions = {
                    [sequelize_1.Op.and]: [
                        {
                            name: {
                                [sequelize_1.Op.like]: `%${filter}%`
                            }
                        },
                        {
                            category: categoryNumber
                        }
                    ]
                };
            }
            else {
                //only filter exist
                conditions = {
                    name: { [sequelize_1.Op.like]: `%${filter}%` }
                };
            }
        }
        else {
            if (categoryNumber) {
                //only category exist
                conditions = {
                    category: categoryNumber
                };
            }
            else {
                //no filter and category
                conditions = {};
            }
        }
        const { limit, offset } = (0, pagination_1.getPagination)(pageNumber, pageSize);
        const data = yield productModel_1.productModel.findAndCountAll({
            attributes: ['id', 'name', 'url_image', 'price', 'discount'],
            where: conditions,
            order: [[orderBy, orderMode]],
            limit,
            offset,
            include: categoryModel_1.categoryModel
        });
        if (data.rows.length === 0) {
            return res.status(404).send({
                products: [],
                message: 'No hay productos que coincidan con los filtros'
            });
        }
        const result = (0, pagination_1.getPagingData)(data, pageNumber, pageSize);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({
            error
        });
    }
});
exports.searchProducts = searchProducts;
//# sourceMappingURL=searchController.js.map