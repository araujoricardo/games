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
    },
    moveLeft(){
        this.xPosition -= this.xSpeed;
    },
};