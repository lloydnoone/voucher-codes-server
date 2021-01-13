"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandler_1 = require("../../app/lib/errorHandler");
/* eslint-disable  @typescript-eslint/no-explicit-any */
var mockRequest = {};
var mockResponse = {
    status: function () { return mockResponse; },
    sendStatus: jest.fn(),
    json: jest.fn()
};
var mockError = {
    name: 'ValidationError',
    errors: {
        testKey: {
            message: 'test message'
        }
    }
};
var mockOtherError = {
    name: 'OtherError'
};
var statusSpy = jest.spyOn(mockResponse, 'status');
var mockNext = jest.fn();
describe('test suite for errorHandler middleware', function () {
    test('Should send custom json for 422', function () {
        errorHandler_1.errorHandler(mockError, mockRequest, mockResponse, mockNext);
        expect(statusSpy).toBeCalledWith(422);
        expect(mockResponse.json).toBeCalledWith({
            message: 'Unprocessable entity',
            errors: { testKey: 'test message' }
        });
    });
    test('any other type of response should send 500', function () {
        errorHandler_1.errorHandler(mockOtherError, mockRequest, mockResponse, mockNext);
        expect(mockResponse.sendStatus).toBeCalledWith(500);
        expect(mockNext).toBeCalled();
    });
});
