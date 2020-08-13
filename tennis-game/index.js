// He create two vars, that I don't know why

let canvas;
let canvasContext;


let ball ={
    xPosition: 50,
    yPosition: 50,
    xSpeed: 10,
    ySpeed: 10,
    radius: 15,
    color: "#fdd401"
};

let playerOne = {
    xPosition: 10,
    yPosition: 400,
    width: 22,
    height: 120,
    color: "black"
};


window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');


    const framesPerSecond = 30;
    setInterval(()=>{
        moveBall();
        drawScreen();
        gameOver();
        ballDeflection(playerOne);
    }, 1000/framesPerSecond);

    canvas.addEventListener("mousemove", (event)=>{
        const mousePos = this.calculateMousePos(event);

        playerOne.yPosition = mousePos.y-(playerOne.height/2);

        // console.log(mousePos.x);
        // console.log(mousePos.y);
    });
};

function moveBall(){
    ball.xPosition = ball.xPosition + ball.xSpeed;
    ball.yPosition += ball.ySpeed;

    if(ball.xPosition>(canvas.width-ball.radius)){
        ball.xSpeed = -ball.xSpeed;
    };
    if(ball.xPosition<ball.radius){
        ball.xSpeed = - ball.xSpeed;
    };

    if(ball.yPosition>(canvas.height-ball.radius)){
        ball.ySpeed = -ball.ySpeed;
    };
    if(ball.yPosition<ball.radius){
        ball.ySpeed = - ball.ySpeed;
    };
};

function drawScreen(){
    canvasContext.fillStyle = '#494e67';
    canvasContext.fillRect(0,0,canvas.width, canvas.height);

    drawBall(ball.xPosition, ball.yPosition, ball.radius, ball.color);
    drawPlayer(playerOne);
};

function drawBall(centerX, centerY, radius, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
};

function calculateMousePos(event){
    const rect = canvas.getBoundingClientRect();
    const root = document.documentElement;
    const mouseX = event.clientX - rect.left - root.scrollLeft;
    const mouseY = event.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
    };
};

function drawPlayer(player){
    canvasContext.fillStyle = player.color;
    canvasContext.fillRect(player.xPosition, player.yPosition, player.width, player.height);
};

function gameOver(){
    if((ball.xPosition-ball.radius)<=0){
        alert("Você perdeu o jogo!");
    };
};

function ballDeflection(player){

    if((ball.xPosition-ball.radius)<=(player.xPosition+player.width) && ((ball.xPosition-ball.radius))>=player.xPosition){

        if((ball.yPosition> player.yPosition) && (ball.yPosition<=(player.yPosition+player.height))){
            ball.xSpeed = -ball.xSpeed;
        };



    
    };
};