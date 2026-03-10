import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

// Register helpers once
if (typeof hbs.registerHelper === 'function') {
  hbs.registerHelper('eq', (a: any, b: any) => a === b);
  hbs.registerHelper('neq', (a: any, b: any) => a !== b);
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`\n🏢  NexusEstate is live → http://localhost:${port}`);
  console.log(`    Pages: / | /properties | /about | /contact\n`);
}
bootstrap();
