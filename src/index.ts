import fs from 'fs'

import express, { Express } from 'express';

import { CS571Initializer } from '@cs571/f23-api-middleware'
import { CS571Week02Route } from './routes/week02';

console.log("Welcome to Weekly API!");

const app: Express = express();

const appBundle = CS571Initializer.init(app, {
  allowNoAuth: [],
  skipAuth: false
});

const cole = JSON.parse(fs.readFileSync('includes/me.json').toString())

appBundle.router.addRoutes([
  new CS571Week02Route(cole)
])

app.listen(appBundle.config.PORT, () => {
  console.log(`Running at :${appBundle.config.PORT}`);
});
