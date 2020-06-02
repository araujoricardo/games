import React from "react";
import {nave} from "../../entities/nave";


export default class Canvas extends React.Component{
    canvasRef:React.RefObject<HTMLCanvasElement>;
    canvas: null | HTMLCanvasElement;
    canvasContext: null | CanvasRenderingContext2D;
    fruit:{
        xPosition:number
    };

    constructor(props:any){
        super(props);
        this.canvasRef = React.createRef<HTMLCanvasElement>();
        this.canvas = null;
        this.canvasContext = null;

        this.fruit={
            xPosition: 10
        }
    };
    
    componentDidMount(){
        this.canvas = this.canvasRef.current as HTMLCanvasElement;
        this.canvasContext = this.canvas.getContext("2d");
        
        const framesPerSecond:number = 30;

        setInterval(()=>{            
            this.drawCanvas();
            this.drawRec();
            this.moveXFruit();
            this.drawNave();
            nave.changeXposition();
        }, 1000/framesPerSecond);
    };

   drawCanvas = ():void =>{
        if(this.canvasContext && this.canvas){
            this.canvasContext.clearRect(0,0, this.canvas.width, this.canvas.height);
            this.canvasContext.fillStyle="rgba(123, 41, 34, 0.5)";
            this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };
   };

   drawRec = ()=>{
       if(this.canvasContext){
           this.canvasContext.fillStyle="green";
           this.canvasContext.fillRect(this.fruit.xPosition,20,20,20);
       };
   };

   moveXFruit=()=>{
        this.fruit.xPosition+=2;
        if(this.fruit.xPosition===(this.canvas as HTMLCanvasElement).width){
            this.fruit.xPosition=0
        };
    };

    drawNave = ()=>{
        if(this.canvasContext){
            this.canvasContext.fillStyle=nave.color;
            this.canvasContext.fillRect(nave.xPosition, nave.yPosition, nave.size, nave.size)
        };
    };

    
    render(){
        return(
            <div>
               <canvas ref={this.canvasRef} width="400" height="400"/>
            </div>
        );
    };
};

