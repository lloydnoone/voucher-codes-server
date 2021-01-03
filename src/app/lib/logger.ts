import { Request, Response, NextFunction } from 'express'

function logger(req: Request, res: Response, next: NextFunction): void {
  console.log(`${req.method} to ${req.url}`)
  next()
}

module.exports = logger