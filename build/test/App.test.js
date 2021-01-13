"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("../app/App");
jest.mock('../../../app/controllers/RootController', function () { return jest.fn(); });
jest.mock('../../../app/controllers/LoginController', function () { return jest.fn(); });
var app = new App_1.App();
describe('Test suite for App class', function () {
    test('getApp should return instance of express', function () {
        expect(app.getApp().use).toBeInstanceOf(Function);
    });
});
