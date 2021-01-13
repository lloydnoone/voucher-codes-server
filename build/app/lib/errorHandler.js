"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    if (err.name === 'ValidationError') {
        var errors = {};
        for (var key in err.errors) {
            // pull off the error messages from the passed in err object
            // map to our errors object under the same key
            errors[key] = err.errors[key].message;
        }
        //replace passed in errors with our simplified object
        err.errors = errors;
        //return as JSON
        return res.status(422).json({ message: 'Unprocessable entity', errors: errors });
    }
    res.sendStatus(500);
    next(err);
}
exports.errorHandler = errorHandler;
