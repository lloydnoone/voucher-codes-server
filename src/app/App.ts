import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import { AddressInfo, Server } from 'net'

import { AppRouter } from './AppRouter'
import { port } from './config/environment'
import { logger } from '../app/lib/logger'
import { errorHandler } from '../app/lib/errorHandler'

import './controllers/LoginController'
import './controllers/RootController'

export class App {
  private app: express.Express = express()
  private port = 0
  private server: Server | null = null

  public getApp(): express.Express {
    return this.app
  }

  public ApplyMiddleware(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(cookieSession({ keys: ['alsdfsdf'] }))
    this.app.use(logger)
    this.app.use(AppRouter.getInstance())
    this.app.use(errorHandler)
  }

  public startServer(): void {
    const server = this.app.listen(port, () => {
      const { port } = server.address() as AddressInfo
      this.port = port
      console.log('Listening on port ' + this.port)
    })
    this.server = server
  }

  public getPort(): number {
    return this.port
  }

  public closeServer(): void {
    if (this.server) this.server.close()
  }
}