import { Express } from 'express';

import { CS571Route } from "@cs571/f23-api-middleware/src/interfaces/route";

export class CS571Week06Route implements CS571Route {

    public static readonly ROUTE_NAME: string = '/week06';

    private readonly tix: any;

    public constructor(tix: any) {
        this.tix = tix;
    }

    public addRoute(app: Express): void {
        app.get(CS571Week06Route.ROUTE_NAME, (req, res) => {
            res.status(200).set('Cache-control', 'public, max-age=60').send(this.tix);
        })
    }

    public getRouteName(): string {
        return CS571Week06Route.ROUTE_NAME;
    }
}