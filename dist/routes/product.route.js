"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = require("../controllers/productsController");
const routes = (0, express_1.Router)();
routes.get("/:id", productsController_1.getProductById);
exports.default = routes;
//# sourceMappingURL=product.route.js.map