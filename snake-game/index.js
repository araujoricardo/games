
let canvas;
let canvasContext;

const blockSize = Math.sqrt(400);

let snake = {
    xPosition: 10,
    yPosition: 10,
    xMove: 0,
    yMove:0,
    way:[],
    tailSize: 1,
    initialSize: 5,
    size: blockSize-2
};

let fruit = {
    xPosition: 15,
    yPosition: 15,
    size: blockSize-2
};

window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext("2d");

    const framesPerSecond = 15;
    setInterval(()=>{
        drawScreen();
        drawSnack();
        drawFruit();
        moveSnake();
        collisionSnakeFrut();
    }, 1000/framesPerSecond);

    document.addEventListener("keydown", moveKey);
};


function drawScreen(){
    canvasContext.fillStyle="#9dc813";
	canvasContext.fillRect(0,0,canvas.width,canvas.height);
};

function drawFruit(){
    canvasContext.fillStyle="#943076";
	canvasContext.fillRect(fruit.xPosition*blockSize,fruit.yPosition*blockSize,fruit.size,fruit.size);
};

function drawSnack(){
    
    canvasContext.fillStyle="black";
    for(var i=0;i<snake.way.length;i++) {
        canvasContext.fillRect(snake.way[i].x*blockSize,snake.way[i].y*blockSize,snake.size,snake.size);
        
        //snake eat yourself
        if(snake.way[i].x==snake.xPosition && snake.way[i].y==snake.yPosition) {
            snake.tailSize = snake.initialSize;
        };
    };
    snake.way.push({x:snake.xPosition,y:snake.yPosition});
    //erase end of snake, to show move
    while(snake.way.length>snake.tailSize) {
        snake.way.shift();
    };
};

function moveSnake() {
    snake.xPosition+=snake.xMove;
    snake.yPosition+=snake.yMove;
    
    //edge collision -> note completely good
	if(snake.xPosition<0) {
        snake.xPosition = blockSize-1;
	};
	if(snake.xPosition>blockSize-1) {
        snake.xPosition = 0;
	};
	if(snake.yPosition<0) {
        snake.yPosition = blockSize-1;
	};
	if(snake.yPosition>blockSize-1) {
        snake.yPosition = 0;
	};
};


function moveKey (event){
    switch(event.key){
        case "ArrowUp":{
            snake.xMove=0;
            snake.yMove=-1;
            return console.log("cima");
        };
        case "ArrowRight":{
            snake.xMove=1;
            snake.yMove=0;
            return console.log("direita");
        };
        case "ArrowDown":{
            snake.xMove=0;
            snake.yMove=1;
            return console.log("baixo");
        };
        case "ArrowLeft":{
            snake.xMove=-1;
            snake.yMove=0;
            return console.log("esquerda");
        };
        default:{
            return console.log("nenhuma tecla correspondente");
        };
    };
};

function collisionSnakeFrut(){
    if(fruit.xPosition==snake.xPosition && fruit.yPosition==snake.yPosition) {
        snake.tailSize++;
        fruit.xPosition=Math.floor(Math.random()*blockSize);
        fruit.yPosition=Math.floor(Math.random()*blockSize);
    };
};