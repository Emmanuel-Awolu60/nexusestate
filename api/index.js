const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module');
const express = require('express');
const { join } = require('path');

let app;

async function bootstrap() {
  if (!app) {
    const expressApp = express();
    const nestApp = await NestFactory.create(AppModule, expressApp);
    
    nestApp.useStaticAssets(join(__dirname, '..', 'public'));
    nestApp.setBaseViewsDir(join(__dirname, '..', 'views'));
    nestApp.setViewEngine('hbs');
    
    const hbs = require('hbs');
    hbs.registerHelper('eq', (a, b) => a === b);
    hbs.registerHelper('neq', (a, b) => a !== b);
    
    await nestApp.init();
    app = expressApp;
  }
  return app;
}

module.exports = async (req, res) => {
  const server = await bootstrap();
  return server(req, res);
};
