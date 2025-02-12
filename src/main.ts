import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IS_NODE_ENV_PROD, ORIGIN } from './common/env';
import { swaggerConfig } from './common/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!IS_NODE_ENV_PROD) swaggerConfig(app);

  app.enableCors({
    origin: ORIGIN,
    credentials: true,
  });
  await app.listen(8080);
}
bootstrap();
