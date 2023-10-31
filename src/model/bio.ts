export class Bio {
    name: string;
    quote: string;
    imgSrc: string;

    public constructor(name: string, quote: string, imgSrc: string) {
        this.name = name;
        this.quote = quote;
        this.imgSrc = imgSrc;
    }
}