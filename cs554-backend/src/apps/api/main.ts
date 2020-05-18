import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  await app.listen(process.env.API_PORT, () => {
    Logger.log(`Api listening on http://localhost:${process.env.API_PORT}`);
  });
}
bootstrap();
