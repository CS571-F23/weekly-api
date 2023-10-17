import crypto from 'crypto'

export class Ticket {
    id: string;
    name: string;
    description: string;
    filer: string;

    public constructor(name: string, description: string, filer: string) {
        this.id = crypto.createHash('sha256').update(name + description + filer + new Date().getTime().toString()).digest('hex').substring(0, 48)
        this.name = name;
        this.description = description;
        this.filer = filer;
    }
}