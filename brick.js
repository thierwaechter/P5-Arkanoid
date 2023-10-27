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
        if (ball.x > this.x - ball.size/2 && ball.x < this.x + this.width + ball.size/2 && ball.y > this.y - ball.size/2 && ball.y < this.y + this.height + ball.size/2) {
            return true;
        } else {
            return false;
        }
    }
}
