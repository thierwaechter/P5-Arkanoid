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
let highScore = 0;

// Für die Klötze
let bricks = [];
let distance;
let brickSound;

// Für den Ball
let lostSound;

// Für die Spielfeldgrösse
let gameWidth = 813;
let gameHeight = 700;

// Fürs Levelmanagement
let actualLevel;


function preload() {
  soundFormats("wav");
  barSound = loadSound("sound/bar.wav");
  lostSound = loadSound("sound/gameover.wav");
  brickSound = loadSound("sound/brick.wav");

  headLineFont = loadFont('fonts/GamePlayed.ttf');
  gameTextFont = loadFont('fonts/Emulogic.ttf');
}

function setup() {
  createCanvas(1400, 700);

  player = new PlayerBar(100);
  ball = new Ball();
  gamebackground = new GameBackground();  
}

function draw() {

  background(0);

  if (gameState == 0) {
    startGame();    
  } else if (gameState == 1) {
    playGame();
  } else if (gameState == 2) {
    finishGame();
  } else if (gameState == 3) {
    finishLevel();
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

  gamebackground.draw();

  fill(0);
  rect(gameWidth, 0, width, gameHeight);
  textAlign(CENTER);
  textSize(fontSizeHeader);
  textFont(gameTextFont);
  fill(0, 100, 0);
  text("Level: " + actualLevel, 1100, 100);
  fill(100, 0, 0);
  text("Score: " + highScore, 1100, 150);


  textAlign(CENTER);

  currentLives();


  level.manageLevel();

  player.show();
  player.move(ball);

  ball.show();
  ball.move();

  ball.checkWallCollision();
  ball.checkBarCollision(player);

}

function finishGame() {

  fill("palegreen");
  textAlign(CENTER);
  textSize(fontSizeText);
  textFont(gameTextFont);
  text(
    "Du hast " + highScore + " Punkte erreicht! Versuch es nochmals :-)",
    width / 2 - 200,
    height / 2,
    400,
    500
  );
  actualLevel = 0;
}

function finishLevel() {
  level = new GameLevel();
  level.createLevel(actualLevel);
  fill("palegreen");
  textAlign(CENTER);
  textSize(fontSizeText);
  textFont(gameTextFont);
  text(
    "Top! Du hast " +
      highScore +
      " Punkte erreicht und " +
      actualLevel +
      " das Level geschafft :-)",
    width / 2 - 200,
    height / 2,
    400,
    500
  );
  
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

    if (!actualLevel) {
      actualLevel = 1;
    } else {
      actualLevel++;
    }

    level = new GameLevel();
    level.createLevel(actualLevel);

  } else if (gameState == 1) {
    hasGameStarted = true;

  } else if (gameState == 2) {
    gameState = 0;
    lives = 2;
    highScore = 0;
  } else if (gameState == 3) {
    actualLevel++;
    finishLevel();
    gameState = 1;

  }
}
