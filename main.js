// Für die States
let gameState = 0;
let gameStartTime = 0;
let gameDuration = 5;
let fontSize = 40;
let hasGameStarted = false;
let timeElapsed = 0;

// Für den Playerbalken
let player;

function setup() {
  createCanvas(600, 700);

  player = new PlayerBar(100);
}

function draw() {
  if (gameState == 0) {
    startGame();
  } else if (gameState == 1) {
    playGame();
  } else if (gameState == 2) {
    finishGame();
  }

  drawTime();
}

function startGame() {
  background(0, 255, 0);
  textAlign(CENTER);
  textSize(fontSize);
  text("START", width / 2, height / 2);
}

function playGame() {
  background(255, 255, 0);
  textAlign(CENTER);
  player.show();
  player.move();
}

function finishGame() {
  background(255, 0, 0);
  fill(0);
  textAlign(CENTER);
  textSize(fontSize);
  text("GAME OVER", width / 2, height / 2);
}

function drawTime() {
  timeElapsed = millis() / 1000;
  textSize(20);
  if (hasGameStarted) {
    let gameTimeElapsed = round(gameDuration - (timeElapsed - gameStartTime));
    text("Verbleibende Zeit: " + gameTimeElapsed, width / 2, height - 20);
  }

  if (timeElapsed - gameStartTime >= gameDuration) {
    gameStartTime = NaN;
    hasGameStarted = false;
    gameState = 2;
  }
}

function mousePressed() {
  if (gameState == 0) {
    gameState = 1;
    gameStartTime = millis() / 1000;
    hasGameStarted = true;
  } else if (gameState == 2) {
    gameState = 0;
  }
}
