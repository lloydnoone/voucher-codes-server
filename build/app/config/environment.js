"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secret = exports.port = exports.dbURI = void 0;
var dbURI = process.env.MONGODB_URI || 'mongodb://localhost/voucher-codes';
exports.dbURI = dbURI;
var port = process.env.PORT || 3000;
exports.port = port;
var secret = process.env.SECRET || 'Shhhh it\'s a secret';
exports.secret = secret;
