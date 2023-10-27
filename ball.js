class Ball {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.size = 20;
        this.speedX = 2;
        this.speedY = 2;
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

    checkWallCollision() {
        if (this.x >= width || this.x <= 0) {
            this.speedX *= -1;
        }
        if ( this.y <= 0) {
            this.speedY *= -1;
        }
        if (this.y >= height) {
            gameoverSound.play();
            gameState = 2;
        }
    }

    checkBarCollision(player) {
        if (this.x >= player.x && this.x <= player.x + player.width && this.y >= player.y && this.y <= player.y + player.height) {
            this.speedY *= -1;
            barSound.play();
        }
    }
}