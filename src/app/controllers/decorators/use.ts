/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable  @typescript-eslint/no-unused-vars */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import 'reflect-metadata'
import { RequestHandler } from 'express'
import { MetadataKeys } from './MetadataKeys'

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    // get middlewares that have already been added or return empty array
    const middlewares = Reflect.getMetadata(
      MetadataKeys.middleware,
      target,
      key
    ) || []

    // then add the current middleware to the array and set that as new metadata
    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    )
  }
}