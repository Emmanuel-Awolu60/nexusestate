import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as express from 'express';
import * as hbs from 'hbs';

// Register helpers once
if (typeof hbs.registerHelper === 'function') {
  hbs.registerHelper('eq', (a: any, b: any) => a === b);
  hbs.registerHelper('neq', (a: any, b: any) => a !== b);
}

const expressApp = express();
let app: NestExpressApplication;

async function createApp() {
  if (!app) {
    app = await NestFactory.create<NestExpressApplication>(
      AppModule,
      new ExpressAdapter(expressApp),
    );

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');

    await app.init();
  }
  return app;
}

export default async (req: any, res: any) => {
  await createApp();
  return expressApp(req, res);
};
