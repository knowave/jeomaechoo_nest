import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function swaggerConfig(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('dinner menu API')
    .setDescription('dinner menu API description')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
