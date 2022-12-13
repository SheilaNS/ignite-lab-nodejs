import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// creates the aplication and starts listening on port 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
