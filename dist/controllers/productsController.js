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
exports.getProductById = void 0;
const productModel_1 = require("../models/productModel");
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield productModel_1.productModel.findByPk(id);
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({
                msg: `No existe un usuario con el id ${id}`,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            err,
        });
    }
});
exports.getProductById = getProductById;
//# sourceMappingURL=productsController.js.map