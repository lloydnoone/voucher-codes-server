import { Request, Response, NextFunction } from 'express'
import { logger } from '../../app/lib/logger'

const mockRequest = {
  method: '/testMethod',
  url: '/testUrl'
}

const mockResponse = {}

const mockNext = jest.fn()

describe('test suite for custom logger middleware', () => {
  test('Should log out method and url', () => {

    console.log = jest.fn()

    logger(
      mockRequest as Request, 
      mockResponse as Response, 
      mockNext as NextFunction)
    
    expect(console.log).toHaveBeenLastCalledWith('/testMethod to /testUrl')
  })
})