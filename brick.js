class Brick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 30;
    }

    show() {
        noStroke();
        fill(255, 255, 255);
        rect(this.x, this.y, this.width, this.height);
    }

    checkCollision(ball) {
        if (ball.x >= this.x && ball.x <= this.x + this.width && ball.y >= this.y && ball.y <= this.y + this.height) {
            return true;
        } else {
            return false;
        }
    }
}
