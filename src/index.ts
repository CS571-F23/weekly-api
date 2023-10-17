import fs from 'fs'
import crypto from 'crypto'

import express, { Express } from 'express';

import { CS571Initializer } from '@cs571/f23-api-middleware'
import { CS571Week02Route } from './routes/week02';
import { CS571Week03Route } from './routes/week03';
import { CS571Week05Route } from './routes/week05';
import { CS571Week06Route } from './routes/week06';
import { CS571Week07GetRoute } from './routes/week07-get';
import { CS571Week07CreateRoute } from './routes/week07-create';
import { Ticket } from './model/ticket';

console.log("Welcome to Weekly API!");

const app: Express = express();

const appBundle = CS571Initializer.init(app, {
  allowNoAuth: [],
  skipAuth: false
});

const cole = JSON.parse(fs.readFileSync('includes/me.json').toString())
const prez = JSON.parse(fs.readFileSync('includes/prez.json').toString())
const hurr = JSON.parse(fs.readFileSync('includes/hurr.json').toString())
const tix = JSON.parse(fs.readFileSync('includes/tickets.json').toString())

for (let tic of tix) {
  delete tic.status
}

const mutableTix: Ticket[] = [];

appBundle.router.addRoutes([
  new CS571Week02Route(cole),
  new CS571Week03Route(prez),
  new CS571Week05Route(hurr.map((h: any) => {
    return {
      ...h,
      start_date: h.start_date + Math.floor(Math.random()* 500000),
      end_date: h.end_date + Math.floor(Math.random()* 500000) ,
      id: crypto.createHash('sha256').update(h.name + String(h.start_date) + String(h.end_date) + String(h.category) + String(h.wind_speed)).digest('hex').substring(0, 28)
    }
  })),
  new CS571Week06Route(tix.map((t: any) => {
    return {
      ...t,
      id: crypto.createHash('sha256').update(t.name + t.description).digest('hex').substring(0, 36)
    }
  })),
  new CS571Week07GetRoute(mutableTix),
  new CS571Week07CreateRoute(appBundle.auth, mutableTix)
])

app.listen(appBundle.config.PORT, () => {
  console.log(`Running at :${appBundle.config.PORT}`);
});
