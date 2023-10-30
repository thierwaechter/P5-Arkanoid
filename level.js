class GameLevel {
  constructor() {
    this.bricks = [];
    this.levelBricksCount = 0;
  }

  createLevel(actualLevel) {
    if (actualLevel == 1) {
        let levelRows = 6;
        let levelColumns = 11;
        this.levelBricksCount = levelColumns * levelRows;
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
        let brickRowCounter = 0;
        let levelRows = 11;
        let levelColumns = 11;
        this.levelBricksCount = 65;
        let colorR;
        let colorG;
        let colorB;
        let colors = {
            r: [230, 96, 133, 53, 187, 230, 96, 133, 53, 187, 230],
            g: [114, 173, 197, 104, 62, 114, 173, 197, 104, 62, 114],
            b: [96, 243, 66, 219, 36, 96, 36, 243, 66, 219, 36],
        };

      for (let i = 0; i < levelRows; i++) {
        if (brickRowCounter <= levelColumns) {
            brickRowCounter++;
        }
        for (let j = 0; j < brickRowCounter; j++) {
                    colorR = colors.r[j];
                    colorG = colors.g[j];
                    colorB = colors.b[j];
            this.bricks.push(
                new Brick(j * 62 + 5, i * 32 + 5, colorR, colorG, colorB)
            );
        }
      }
    }
  }

  manageLevel() {
    for (let i = this.bricks.length - 1; i >= 0; i--) {
      this.bricks[i].show();
      if (this.bricks[i].checkCollision(ball)) {
        highScore += 10;
        this.levelBricksCount--;
        brickSound.play();
        ball.reverse();
        if (this.levelBricksCount >= 1) {
            this.bricks.splice(i, 1);
        } else {
            gameState = 3;
            hasGameStarted = false;
        }

      }
    }
  }
}