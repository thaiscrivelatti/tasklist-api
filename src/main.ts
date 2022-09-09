import { ConfigModule } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

ConfigModule.forRoot();

async function bootstrap() {
  const cors = require("cors");
  const app = await NestFactory.create(AppModule);

  app.use(cors());

  await app.listen(process.env.PORT || 3000);
  
}
bootstrap();
