/* eslint-disable */
import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from '@nestjs/common';
import { SentryExceptionCaptured } from '@sentry/nestjs';
import * as Sentry from '@sentry/node';
import { Response } from 'express';

@Catch(Error)
export class SentryExceptionFilter implements ExceptionFilter {
  @SentryExceptionCaptured() 

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = 500;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.getResponse() as string;
    }

    Sentry.captureException(exception);

    response.status(status).json({
      statusCode: status,
      message,
    });
  }
}
