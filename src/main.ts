import { NestFactory } from '@nestjs/core';

import * as config from 'config';
import { AppModule } from './app.module';


const appOptions = { cors: true };
const PORT = config.PORT || 3000;
// const API_PREFIX = config.API.PREFIX;
// const API_TITLE = config.API.TITLE;
// const API_DESC = config.API.DESC;
// const API_VERSION = config.API.VERSION;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, appOptions);
  // app.setGlobalPrefix(API_PREFIX);
  // const options = new DocumentBuilder()
  //   .setTitle(API_TITLE)
  //   .setDescription(API_DESC)
  //   .setVersion(API_VERSION)
  //   .setBasePath(API_PREFIX)
  //   .addBearerAuth()
  //   .build();

  await app.listen(PORT);
}

bootstrap();
