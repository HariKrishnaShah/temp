// File: src/middleware/errorMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import AppError from '../util/appError';
import HttpError from '../util/httpError';

const errorMiddleware = (
  err: Error | AppError | HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = 'Something went wrong';

  if (err instanceof AppError || err instanceof HttpError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({
    Status: statusCode,
    Success: false,
    Message: message,
    data: null
  });
};

export default errorMiddleware;