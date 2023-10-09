import { Express } from 'express';

import { CS571Route } from "@cs571/f23-api-middleware/src/interfaces/route";

export class CS571Week05Route implements CS571Route {

    public static readonly ROUTE_NAME: string = '/week05';

    private readonly hurr: any;

    public constructor(hurr: any) {
        this.hurr = hurr;
    }

    public addRoute(app: Express): void {
        app.get(CS571Week05Route.ROUTE_NAME, (req, res) => {
            res.status(200).set('Cache-control', 'public, max-age=60').send(this.hurr);
        })
    }

    public getRouteName(): string {
        return CS571Week05Route.ROUTE_NAME;
    }
}