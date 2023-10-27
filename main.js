// Für den Start und End Screen
let headLineFont;
let gameTextFont;

// Für die States
let gameState = 0;
let gameStartTime = 0;
let gameDuration = 50;
let fontSizeHeader = 40;
let fontSizeText = 20;
let hasGameStarted = false;

// Für den Player
let player;
let lives = 2;
let barSound;

// Für die Klötze
let bricks = [];
let distance;
let brickSound;

// Für den Ball
let lostSound;


function preload() {
  soundFormats("wav");
  barSound = loadSound("sound/bar.wav");
  lostSound = loadSound("sound/gameover.wav");
  brickSound = loadSound("sound/brick.wav");

  headLineFont = loadFont('fonts/GamePlayed.ttf');
  gameTextFont = loadFont('fonts/Emulogic.ttf');
}

function setup() {
  createCanvas(848, 700);

  player = new PlayerBar(100);
  ball = new Ball();

  // Level 1
  let colorR;
  let colorG;
  let colorB;
  let colors = {
    r: [100, 255, 255, 0, 160, 0],
    g: [100, 0, 255, 0, 32, 255],
    b: [100, 0, 0, 255, 240, 0]
  }

  for (let i = 0; i < 6; i++) {
    colorR = colors.r[i];
    colorG = colors.g[i];
    colorB = colors.b[i];
      for (let j = 0; j < 13; j++) {
        bricks.push(new Brick(j * 65 + 5, i * 35 + 5, colorR, colorG, colorB));
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
  background(10, 10, 10);

  fill('palegreen')
  textAlign(CENTER);
  textSize(fontSizeHeader);
  textFont(headLineFont);
  text("ARKANOID mit P5", width / 2 - 50, height / 2 - 200, 100, 200);

  textAlign(CENTER);
  textSize(fontSizeText);
  textFont(gameTextFont);
  text("Drücke die linke und rechte Pfeil-Taste um den Balken zu bewegen. Versuche mit dem Ball alle Klötze zu treffen. Klicke damit der Ball losfliegt :-)",  width / 2 - 200, height / 2, 400, 500);
}

function playGame() {
  background(0, 80, 255);
  textAlign(CENTER);

  currentLives();

  player.show();
  player.move(ball);

  ball.show();
  ball.move();
  

  ball.checkWallCollision();
  ball.checkBarCollision(player);


  for (let i = bricks.length - 1; i >= 0; i--) {
    bricks[i].show();
    if (bricks[i].checkCollision(ball)) {
      brickSound.play();
      ball.reverse();
      bricks.splice(i, 1);
    }
  }
}

function finishGame() {
  background(0, 0, 0);
  fill(0);
  textAlign(CENTER);
  textSize(fontSizeText);
  textFont(gameTextFont);
  text("Versuch es nochmals :-)")
}

function currentLives() {
  for (let l = 0; l < lives; l++) {
    noStroke();
    fill(150, 150, 150);
    rect(l*25+5, height-10, 20, 5, 2);
  }
}

function mousePressed() {
  if (gameState == 0) {
    gameState = 1;
  } else if (gameState == 1) {
    hasGameStarted = true;
  } else if (gameState == 2) {
    gameState = 0;
    lives = 2;
  }
}


