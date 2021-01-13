"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("../../app/lib/logger");
var mockRequest = {
    method: '/testMethod',
    url: '/testUrl'
};
var mockResponse = {};
var mockNext = jest.fn();
describe('test suite for custom logger middleware', function () {
    test('Should log out method and url', function () {
        console.log = jest.fn();
        logger_1.logger(mockRequest, mockResponse, mockNext);
        expect(console.log).toHaveBeenLastCalledWith('/testMethod to /testUrl');
    });
});
