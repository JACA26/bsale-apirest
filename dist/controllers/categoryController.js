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
exports.getCategoryById = exports.getAllCategories = void 0;
const categoryModel_1 = require("../models/categoryModel");
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categoryModel_1.categoryModel.findAll();
        res.json({
            data: categories,
            results: categories.length
        });
    }
    catch (err) {
        res.status(500).json({
            err
        });
    }
});
exports.getAllCategories = getAllCategories;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const category = yield categoryModel_1.categoryModel.findByPk(id);
        if (category) {
            res.json({
                data: category,
                results: 1
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una categoria con el id ${id}`
            });
        }
    }
    catch (err) {
        res.status(500).json({
            err
        });
    }
});
exports.getCategoryById = getCategoryById;
//# sourceMappingURL=categoryController.js.map