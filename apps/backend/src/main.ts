// IMPORTANT: Make sure to import `instrument.ts` at the top of your file. Sentry will not work otherwise.
import { SentryExceptionFilter } from './filters/sentry-exception-filter.js';
import './instrument';

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = process.env.PORT ?? 3002;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new SentryExceptionFilter());
  const configService = app.get(ConfigService);
  console.log({
    SENTRY_DSN: configService.get('SENTRY_DSN'),
    NODE_ENV: configService.get('NODE_ENV'),
    DATABASE_URL: configService.get('DATABASE_URL'),
  });
  await app.listen(process.env.PORT ?? 3002);
  console.log(`Server is running on port ${PORT}`);
}
void bootstrap();
