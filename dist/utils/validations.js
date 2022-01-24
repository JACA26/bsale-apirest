"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToNumber = exports.validateOrderFormat = void 0;
const orderTypes = ['category', 'name', 'price', 'discount'];
const orderModes = ['ASC', 'DESC'];
const validateOrderFormat = (order) => {
    if (!order) {
        return { orderby: 'id', ordermode: 'ASC' };
    }
    let { orderby, ordermode } = order;
    if (!orderby || orderby === '') {
        orderby = 'id';
    }
    if (!ordermode || ordermode === '') {
        ordermode = 'ASC';
    }
    ordermode = ordermode.toUpperCase();
    if (!orderTypes.includes(orderby)) {
        if (!orderModes.includes(ordermode)) {
            return { orderby: 'id', ordermode: 'ASC' };
        }
        else {
            return { orderby: 'id', ordermode };
        }
    }
    else {
        if (!orderModes.includes(ordermode)) {
            return { orderby, ordermode: 'ASC' };
        }
        else {
            return { orderby, ordermode };
        }
    }
};
exports.validateOrderFormat = validateOrderFormat;
const convertToNumber = (value) => {
    if (!value) {
        return undefined;
    }
    if (isNaN(parseInt(value))) {
        return undefined;
    }
    else {
        return parseInt(value);
    }
};
exports.convertToNumber = convertToNumber;
//# sourceMappingURL=validations.js.map