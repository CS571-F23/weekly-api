import { Express } from 'express';

import { CS571Route } from "@cs571/f23-api-middleware/src/interfaces/route";
import { Bio } from '../model/bio';

export class CS571Week09BioRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/week09/bio';

    private readonly bio: Bio;

    public constructor(bio: Bio) {
        this.bio = bio;
    }

    public addRoute(app: Express): void {
        app.get(CS571Week09BioRoute.ROUTE_NAME, (req, res) => {
            res.status(200).set('Cache-control', 'public, max-age=60').send(this.bio);
        })
    }

    public getRouteName(): string {
        return CS571Week09BioRoute.ROUTE_NAME;
    }
}