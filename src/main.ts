import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ORIGIN } from './common/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Jeomaechoo API')
    .setDescription('The Dinner menu API Description')
    .setVersion('1.0')
    .addTag('Jeomaechoo')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: ORIGIN,
    credentials: true,
  });
  await app.listen(8080);
}
bootstrap();
