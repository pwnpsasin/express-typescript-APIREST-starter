import { Request, Response, NextFunction } from 'express';

export function loggerMiddleware(request: Request, response: Response, next: NextFunction): void {
  // tslint:disable-next-line
  console.log(`${request.method} ${request.path}`);
  next();
}


