export class Recipes {
    public name: string;
    public description: string;
    public imagePath: string;
    constructor(name: string, dec: string, img: string) {
        this.name = name;
        this.description = dec;
        this.imagePath = img;
    }

}