type Nave ={
    size: number,
    color: string
    xPosition: number
    yPosition: number
    changeXposition: ()=>void
};


export const nave: Nave  = {
    size: 20,
    color: "blue",
    xPosition: 10,
    yPosition: 100,

    changeXposition(){
        this.xPosition +=1
    }
};