"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
var environment_1 = require("./config/environment");
var logger_1 = require("../app/lib/logger");
var errorHandler_1 = require("../app/lib/errorHandler");
require("./controllers/LoginController");
require("./controllers/RootController");
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.port = 0;
        this.server = null;
    }
    App.prototype.getApp = function () {
        return this.app;
    };
    App.prototype.ApplyMiddleware = function () {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(cookie_session_1.default({ keys: ['alsdfsdf'] }));
        this.app.use(logger_1.logger);
        this.app.use(AppRouter_1.AppRouter.getInstance());
        this.app.use(errorHandler_1.errorHandler);
    };
    App.prototype.startServer = function () {
        var _this = this;
        var server = this.app.listen(environment_1.port, function () {
            var port = server.address().port;
            _this.port = port;
            console.log('Listening on port ' + _this.port);
        });
        this.server = server;
    };
    App.prototype.getPort = function () {
        return this.port;
    };
    App.prototype.closeServer = function () {
        if (this.server)
            this.server.close();
    };
    return App;
}());
exports.App = App;
