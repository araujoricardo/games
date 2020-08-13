export class Monstro{
    public position: number
    public name: string
    constructor(name: string){
        this.name = name
        this.position = Math.random();
    };
};