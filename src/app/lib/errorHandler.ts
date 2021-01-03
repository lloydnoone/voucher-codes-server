import { Response, Request, NextFunction } from 'express'

function errorHandler(
  err: any, 
  req: Request, 
  res: Response, 
  next: NextFunction): Response | void {
  if (err.name === 'ValidationError') {
    const errors: {[key: string]: any} = {}

    for (const key in err.errors) {
      errors[key] = err.errors[key].message
    }

    err.errors = errors

    return res.status(422).json({ message: 'Unprocessable entity', errors })
  }
  res.sendStatus(500)
  next(err)
}

module.exports = errorHandler