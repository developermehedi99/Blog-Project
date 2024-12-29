"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'API Not Found !!',
    });
};
exports.notFound = notFound;
exports.default = exports.notFound;
