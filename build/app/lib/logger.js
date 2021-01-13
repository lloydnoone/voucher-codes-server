"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
function logger(req, res, next) {
    console.log(req.method + " to " + req.url);
    next();
}
exports.logger = logger;
