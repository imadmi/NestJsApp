import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();

// http Get -> controller -> service -> db

// nest g module ningas
// nest g controller ningas
// nest g service ningas
// nest g resource ningas