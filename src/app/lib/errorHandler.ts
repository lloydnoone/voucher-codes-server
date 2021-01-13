/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { Response, Request, NextFunction } from 'express'

export function errorHandler(
  err: any, 
  req: Request, 
  res: Response, 
  next: NextFunction): Response | void {
  
  if (err.name === 'ValidationError') {
    const errors: {[key: string]: any} = {}

    for (const key in err.errors) {
      // pull off the error messages from the passed in err object
      // map to our errors object under the same key
      errors[key] = err.errors[key].message
    }

    //replace passed in errors with our simplified object
    err.errors = errors

    //return as JSON
    return res.status(422).json({ message: 'Unprocessable entity', errors })
  }
  res.sendStatus(500)
  next(err)
}