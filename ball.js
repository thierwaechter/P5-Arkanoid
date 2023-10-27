class Ball {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.size = 20;
        this.speedX = 4;
        this.speedY = 4;
    }

    show() {
        noStroke();
        fill(255, 255, 255);
        ellipse(this.x, this.y, this.size);
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
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
            this.x = 80;
            this.speedY *= -1;
        }
        console.log(lives)
        if (lives == 0) {
            gameState = 2;
        } 
        
    }

    checkBarCollision(player) {
        if (this.x >= player.x && this.x <= player.x + player.width && this.y >= player.y-this.size/2 && this.y <= player.y + player.height-this.size/2) {
            this.speedY *= -1;
            barSound.play();
        }
    }

    checkEdges(player) {
        if (this.y < 0 || (this.y > player.y && this.x > player.x && this.x < player.x + player.w)) {
          this.yspeed *= -1;
        }
    
        if (this.x < 0 || this.x > width) {
          this.xspeed *= -1;
        }
      }
}