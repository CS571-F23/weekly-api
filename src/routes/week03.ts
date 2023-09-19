import { Express } from 'express';

import { CS571Route } from "@cs571/f23-api-middleware/src/interfaces/route";

export class CS571Week03Route implements CS571Route {

    public static readonly ROUTE_NAME: string = '/week03';

    private readonly prez: any;

    public constructor(prez: any) {
        this.prez = prez;
    }

    public addRoute(app: Express): void {
        app.get(CS571Week03Route.ROUTE_NAME, (req, res) => {
            res.status(200).set('Cache-control', 'public, max-age=60').send(this.prez);
        })
    }

    public getRouteName(): string {
        return CS571Week03Route.ROUTE_NAME;
    }
}