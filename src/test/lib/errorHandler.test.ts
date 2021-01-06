import { Request, NextFunction } from 'express'
import { errorHandler } from '../../app/lib/errorHandler'
/* eslint-disable  @typescript-eslint/no-explicit-any */

const mockRequest = {}
const mockResponse = {
  status: () => mockResponse,
  sendStatus: jest.fn(),
  json: jest.fn()
}
const mockError = {
  name: 'ValidationError',
  errors: {
    testKey: {
      message: 'test message'
    }
  }
}

const mockOtherError = {
  name: 'OtherError'
}

const statusSpy = jest.spyOn(mockResponse, 'status')

const mockNext = jest.fn()

describe('test suite for errorHandler middleware', () => {
  test('Should send custom json for 422', () => {

    errorHandler(
      mockError as any,
      mockRequest as Request, 
      mockResponse as any, 
      mockNext as NextFunction)
    
    expect(statusSpy).toBeCalledWith(422)
    expect(mockResponse.json).toBeCalledWith({
      message: 'Unprocessable entity',
      errors: { testKey: 'test message' }
    })
  })

  test('any other type of response should send 500', () => {
    
    errorHandler(
      mockOtherError as any,
      mockRequest as Request, 
      mockResponse as any, 
      mockNext as NextFunction)

    expect(mockResponse.sendStatus).toBeCalledWith(500)
    expect(mockNext).toBeCalled()
  })
})