import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // validation pipe
  await app.listen(3001);
}
bootstrap();

// http Get -> controller -> service -> db

// nest g module ningas
// nest g controller ningas
// nest g service ningas
// nest g resource ningas