"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = require("../controllers/categoryController");
const routes = (0, express_1.Router)();
routes.get("/", categoryController_1.getAllCategories);
routes.get("/:id", categoryController_1.getCategoryById);
exports.default = routes;
//# sourceMappingURL=category.route.js.map