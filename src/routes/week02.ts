import { Express } from 'express';

import { CS571Route } from "@cs571/f23-api-middleware/src/interfaces/route";

export class CS571Week02Route implements CS571Route {

    public static readonly ROUTE_NAME: string = '/week02';

    private readonly me: any;

    public constructor(me: any) {
        this.me = me;
    }

    public addRoute(app: Express): void {
        app.get(CS571Week02Route.ROUTE_NAME, (req, res) => {
            res.status(200).set('Cache-control', 'public, max-age=60').send(this.me);
        })
    }

    public getRouteName(): string {
        return CS571Week02Route.ROUTE_NAME;
    }
}