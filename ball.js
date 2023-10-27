class Ball {
    constructor() {
        this.x = NaN;
        this.y = NaN
        this.size = 20;
        this.speedX = 3;
        this.speedY = 3;
    }

    show() {
        noStroke();
        fill(255, 255, 255);
        ellipse(this.x, this.y, this.size);
    }
    
    move() {
        if (!hasGameStarted) {
            this.x = player.x + player.width / 2;
            this.y = player.y - 12;
        } else {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }

    reverse() {
        this.speedY *= -1;
      }

    checkWallCollision() {
        if (this.x >= width-this.size/2 || this.x <= this.size/2) {
            this.speedX *= -1;
        }
        if ( this.y <= 0) {
            this.speedY *= -1;
        }
        if (this.y >= height) {
            lostSound.play();
            lives -= 1;

        }
        if (lives < 0) {
            gameState = 2;
            hasGameStarted = false;
        } 
        
    }

    checkBarCollision(player) {
        if (this.x >= player.x && this.x <= player.x + player.width && this.y >= player.y-this.size/2 && this.y <= player.y + player.height-this.size/2) {
            this.speedY *= -1;
            barSound.play();
        }
    }
}