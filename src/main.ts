import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService);
  const port = configService.get('PORT')
  console.log(port)
  // const port = process.env.PORT || 8880
  await app.listen(port)
}
bootstrap()
