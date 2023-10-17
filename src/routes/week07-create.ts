import { Express } from 'express';

import { CS571Route } from "@cs571/f23-api-middleware/src/interfaces/route";
import { Ticket } from '../model/ticket';
import { CS571Auth } from '@cs571/f23-api-middleware/dist/services/auth';

export class CS571Week07CreateRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/week07';

    private readonly auth: CS571Auth;
    private readonly tix: Ticket[];

    public constructor(auth: CS571Auth, tix: Ticket[]) {
        this.auth = auth;
        this.tix = tix;
    }

    public addRoute(app: Express): void {
        app.post(CS571Week07CreateRoute.ROUTE_NAME, (req, res) => {
            const name = req.body.name?.trim();
            const description = req.body.description?.trim();
            const filer = this.auth.getUserFromRequest(req).email;

            if (!name || !description) {
                res.status(400).send({
                    msg: "A request must contain a 'name' and 'description'"
                });
                return;
            }

            if (name.length > 64 || description.length > 512) {
                res.status(413).send({
                    msg: "'name' must be 64 characters or fewer and 'description' must be 512 characters or fewer"
                })
                return;
            }

            const newTic = new Ticket(name, description, filer);

            this.tix.push(newTic);

            res.status(200).send({
                msg: "Successfully filed ticket! Someone will get back to you shortly.",
                ticket: newTic
            })
        })
        
    }

    public getRouteName(): string {
        return CS571Week07CreateRoute.ROUTE_NAME;
    }
}