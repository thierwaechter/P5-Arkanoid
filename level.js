class GameLevel {
  constructor() {
    this.bricks = [];
  }

  createLevel(actualLevel) {
    if (actualLevel == 1) {
        let levelRows = 1;
        let levelColumns = 1;
        let colorR;
        let colorG;
        let colorB;
        let colors = {
            r: [100, 255, 255, 0, 160, 0],
            g: [100, 0, 255, 0, 32, 255],
            b: [100, 0, 0, 255, 240, 0],
        };

        for (let i = 0; i < levelRows; i++) {
            colorR = colors.r[i];
            colorG = colors.g[i];
            colorB = colors.b[i];
            for (let j = 0; j < levelColumns; j++) {
            this.bricks.push(
                new Brick(j * 62 + 5, i * 32 + 5, colorR, colorG, colorB)
            );
            }
      }
    } else if (actualLevel == 2) {
      let levelRows = 1;
      let levelColumns = 1;
      let colorR;
      let colorG;
      let colorB;
      let colors = {
        r: [0, 255, 255, 0, 160, 0],
        g: [100, 0, 255, 0, 32, 255],
        b: [0, 0, 0, 255, 240, 0],
      };

      for (let i = 0; i < levelRows; i++) {
        colorR = colors.r[i];
        colorG = colors.g[i];
        colorB = colors.b[i];
        for (let j = 0; j < levelColumns; j++) {
          this.bricks.push(
            new Brick(j * 62 + 5, i * 32 + 5, colorR, colorG, colorB)
          );
        }
      }
    }
  }

  manageLevel() {

    let levelBricksCount = this.levelRows * this.levelColumns;
    for (let i = this.bricks.length - 1; i >= 0; i--) {
      this.bricks[i].show();
      if (this.bricks[i].checkCollision(ball)) {
        highScore += 10;
        levelBricksCount--;
        brickSound.play();
        ball.reverse();
        if (levelBricksCount > 1) {
            this.bricks.splice(i, 1);
        } else {
            gameState = 3;
            hasGameStarted = false;
        }

      }
    }
  }
}