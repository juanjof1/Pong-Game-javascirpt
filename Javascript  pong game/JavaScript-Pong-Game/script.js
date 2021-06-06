let canvas;
let context;
let gameLoop;

const boardX = 300;
const boardY = 300;
const paddleH = 10;
const paddleD = boardY - paddleH;
const paddLeW = 150;

let paddLeX = 150;
let ballX = 150;
let ballY = 150;
let ballDX = 2;
let ballDY = 4;

function drawgamecanvas(){
    canvas = document.getElementById('gameBoard');

    if (canvas.getContext){
        context = canvas.getContext('2d');
        gameLoop = setInterval(draw, 16);
        window.addEventListener('keydown', Keyinput, true);
    }
}

function draw() {
    context.clearRect( 0, 0, boardX, boardX);

    context.fillStyle = 'thistle';
    context.beginPath();
    context.rect(0, 0, boardX, boardY);
    context.closePath();
    context.fill();

    context.fillStyle = 'tomato';
    context.beginPath();
    context.arc(ballX, ballDY, 15, 0, Math.PI * 2, true );
    context.closePath();
    context.fill();

    context.fillStyle = 'navy'
    context.beginPath();
    context.rect( paddLeX, paddleD, paddLeW, paddleH);
    context.closePath();
    context.fill();

    ballX += ballDX;
    ballY += ballDY;

    if (ballX + ballDX > boardX - 15 || ballX + ballDX < 15) {
        ballDX = -ballDX;
    }

    if (ballY + ballDY < 15) {
        ballDY = - ballDY;
    } else if (ballY + ballDY > boardY - 15) {
        if (ballX > paddLeX && ballX < paddLeX + paddLeW) {
            ballDY = - ballDY;
        } else {
           clearInterval(gameLoop);
           alert('Play again?'); 
        }
    }

    function Keyinput(e) {

        switch (e.keyCode) {
          // Left arrow.
        case 37:
          paddleX = paddleX - 20;
          if (paddleX < 0) paddleX = 0;
          break;
      
          // Right arrow.
        case 39:
          paddleX = paddleX + 20;
          if (paddleX > boardX - paddleW) paddleX = boardX - paddleW;
          break;
        }
      }
}



drawgamecanvas();