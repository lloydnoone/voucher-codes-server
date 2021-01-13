import { App } from '../app/App'

jest.mock('../app/controllers/LoginController', () => jest.fn())
jest.mock('../app/controllers/LoginController', () => jest.fn())


const app = new App()

describe('Test suite for App class', () => {
  test('getApp should return instance of express', () => {
    expect(app.getApp().use).toBeInstanceOf(Function)
  })
})