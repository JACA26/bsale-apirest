"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const searchController_1 = require("../controllers/searchController");
const routes = (0, express_1.Router)();
routes.get("/", searchController_1.searchProducts);
exports.default = routes;
//# sourceMappingURL=search.route.js.map