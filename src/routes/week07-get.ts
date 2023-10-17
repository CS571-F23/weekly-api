import { Express } from 'express';

import { CS571Route } from "@cs571/f23-api-middleware/src/interfaces/route";
import { Ticket } from '../model/ticket';

export class CS571Week07GetRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/week07';

    private readonly tix: Ticket[];

    public constructor(tix: Ticket[]) {
        this.tix = tix;
    }

    public addRoute(app: Express): void {
        app.get(CS571Week07GetRoute.ROUTE_NAME, (req, res) => {
            res.status(200).send(this.tix);
        })
    }

    public getRouteName(): string {
        return CS571Week07GetRoute.ROUTE_NAME;
    }
}