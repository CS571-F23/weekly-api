import { Express } from 'express';

import { CS571Route } from "@cs571/f23-api-middleware/src/interfaces/route";

export class CS571Week09MessageRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/week09/message';

    private readonly jokes: string[];

    public constructor(jokes: string[]) {
        this.jokes = jokes;
    }

    public addRoute(app: Express): void {
        app.get(CS571Week09MessageRoute.ROUTE_NAME, (req, res) => {
            res.status(200).send({
                msg: this.jokes[Math.floor(Math.random() * this.jokes.length)]
            });
        })
    }

    public getRouteName(): string {
        return CS571Week09MessageRoute.ROUTE_NAME;
    }
}