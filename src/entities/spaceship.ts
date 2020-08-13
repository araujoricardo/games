import {canvasTemplate} from "../services/gameConfig";

type Spaceship ={
    size: number,
    color: string
    xPosition: number
    yPosition: number
    xSpeed: number
    moveRight: ()=>void
    moveLeft: ()=>void
};


export const spaceship: Spaceship  = {
    size: 20,
    color: "blue",
    xPosition: 10,
    yPosition: 100,
    xSpeed: 5,

    moveRight(){
        this.xPosition += this.xSpeed;
        if((this.xPosition+this.size)>canvasTemplate.width){
            this.xPosition = canvasTemplate.width - this.size;
        };
    },
    moveLeft(){
        this.xPosition -= this.xSpeed;
        if(this.xPosition<0){
            this.xPosition = 0;
        };
    },
};