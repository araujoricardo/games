import React from "react";
import {spaceship} from "../../entities/spaceship";
import {movesControl} from "../../services/movesControl";
import {canvasTemplate} from "../../services/gameConfig";


export default class Canvas extends React.Component{
    canvasRef:React.RefObject<HTMLCanvasElement>;
    canvas: null | HTMLCanvasElement;
    canvasContext: null | CanvasRenderingContext2D;

    constructor(props:any){
        super(props);
        this.canvasRef = React.createRef<HTMLCanvasElement>();
        this.canvas = null;
        this.canvasContext = null;
    };
    
    componentDidMount(){
        this.canvas = this.canvasRef.current as HTMLCanvasElement;
        this.canvasContext = this.canvas.getContext("2d");
        
        this.mainGame();
    };
    
    
    mainGame=()=>{
        const framesPerSecond:number = 30;
        setInterval(()=>{            
            this.drawCanvas();
            this.drawNave();
            this.drawModel();
        }, 1000/framesPerSecond);

        document.addEventListener("keydown", movesControl );
    };


   drawCanvas = ():void =>{
        if(this.canvasContext){
            this.canvasContext.clearRect(0, 0, canvasTemplate.width, canvasTemplate.height);
            this.canvasContext.fillStyle = canvasTemplate.color;
            this.canvasContext.fillRect(0, 0, canvasTemplate.width, canvasTemplate.height);
        };
   };

    drawNave = ()=>{
        if(this.canvasContext){
            this.canvasContext.fillStyle=spaceship.color;
            this.canvasContext.fillRect(spaceship.xPosition, spaceship.yPosition, spaceship.size, spaceship.size)
        };
    };

    drawModel = ()=>{
        // const centerX: number = 100;
        // const centerY: number = 100;
        // const mockObject = [
        //     {x: centerX - 10, y: centerY},
        //     {x: centerX + 10,  y: centerY+10},
        //     {x: centerX - 20, y: centerY+20}
        // ]

        // const monster ={
        //     centerX: 100, 
        //     centerY: 100, 
        //     mockObject: [
        //         {x: centerX - 10, y: centerY},
        //         {x: centerX + 10,  y: centerY+10},
        //         {x: centerX - 20, y: centerY+20}
        //     ]
        // }


        // if(this.canvasContext){
        //     this.canvasContext.fillStyle = "yellow";
        //     this.canvasContext.beginPath();
        //     monster.mockObject.forEach((element)=>{
        //         return this.canvasContext?.fillRect(element.x, element.y, 10, 10);
        //     });
        //     this.canvasContext.fill();
        // };
    };

    render(){
        return(
            <div>
               <canvas ref={this.canvasRef} width={canvasTemplate.width} height={canvasTemplate.height}/>
            </div>
        );
    };
};