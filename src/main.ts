import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://js-api-gql.vercel.app', 'https://studio.apollographql.com', 'https://js-api-gql-production.up.railway.app',
      'https://js-api-gql-production.up.railway.app/graphql', 'http://localhost:3001', 'http://localhost:3002', 'https://jsapi-admin.vercel.app', 'https://jemmastables-website.vercel.app']
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
