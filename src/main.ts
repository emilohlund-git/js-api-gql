import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://js-api-gql.vercel.app', 'https://studio.apollographql.com']
  });

  await app.listen(3000);
}
bootstrap();
