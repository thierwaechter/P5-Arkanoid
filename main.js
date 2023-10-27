// Für die States
let gameState = 0;
let gameStartTime = 0;
let gameDuration = 50;
let fontSize = 40;
let hasGameStarted = false;

// Für den Playerbalken
let player;
let barSound;

// Für die Klötze
let bricks = [];
let distance;

// Für den Ball
let gameoverSound;


function preload() {
  soundFormats("wav");
  barSound = loadSound("sound/bar.wav");
  gameoverSound = loadSound("sound/gameover.wav");
}

function setup() {
  createCanvas(600, 700);

  player = new PlayerBar(100);
  ball = new Ball();

  for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 5; j++) {
        bricks.push(new Brick(i * 70 + 10, j * 40 + 10));
      }

  }
}

function draw() {
  if (gameState == 0) {
    startGame();
  } else if (gameState == 1) {
    playGame();
  } else if (gameState == 2) {
    finishGame();
  }

}

function startGame() {
  background(0, 255, 0);
  textAlign(CENTER);
  textSize(fontSize);
  text("START", width / 2, height / 2);
}

function playGame() {
  background(0, 80, 255);
  textAlign(CENTER);
  player.show();
  player.move();

  ball.show();
  ball.move();
  ball.checkWallCollision();
  ball.checkBarCollision(player);


  for (let i = bricks.length - 1; i >= 0; i--) {
    bricks[i].show();
  }

}

function finishGame() {
  background(255, 0, 0);
  fill(0);
  textAlign(CENTER);
  textSize(fontSize);
  text("GAME OVER", width / 2, height / 2);
}


function mousePressed() {
  if (gameState == 0) {
    gameState = 1;
    hasGameStarted = true;
  } else if (gameState == 2) {
    gameState = 0;
    hasGameStarted = false;
  }
}
