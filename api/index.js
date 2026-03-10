const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module');
const { join } = require('path');

let cachedApp;

async function bootstrap() {
  if (!cachedApp) {
    const app = await NestFactory.create(AppModule);
    
    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    
    const hbs = require('hbs');
    hbs.registerHelper('eq', (a, b) => a === b);
    hbs.registerHelper('neq', (a, b) => a !== b);
    
    await app.init();
    cachedApp = app.getHttpAdapter().getInstance();
  }
  return cachedApp;
}

module.exports = async (req, res) => {
  const server = await bootstrap();
  return server(req, res);
};
