"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagingData = exports.getPagination = void 0;
const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};
exports.getPagination = getPagination;
const getPagingData = (data, page, limit = 10) => {
    const { count: totalItems, rows: products } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit) - 1;
    return { totalItems, products, totalPages, currentPage };
};
exports.getPagingData = getPagingData;
//# sourceMappingURL=pagination.js.map