"use strict";
//Variables Config
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = void 0;
exports.DB_NAME = process.env.DB_NAME || 'bsale_test';
exports.DB_USER = process.env.DB_USER || 'bsale_test';
exports.DB_PASSWORD = process.env.DB_PASSWORD || 'bsale_test';
exports.DB_HOST = process.env.DB_HOST || 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com';
exports.PORT = process.env.PORT || '4000';
//# sourceMappingURL=config.js.map