class Brick {
    constructor(x, y, r, g, b) {
        this.x = x;
        this.y = y + 100;       
        this.width = 60;
        this.height = 30;
        this.colorR = r
        this.colorG = g
        this.colorB = b    }

    show() {
        noStroke();
        fill(this.colorR, this.colorG, this.colorB);
        strokeWeight(2);
        stroke(10,10,10)
        rect(this.x, this.y, this.width, this.height, 1);
    }

    checkCollision(ball) { 
        if (ball.x > this.x - ball.size/2 && ball.x < this.x + this.width + ball.size/2 && ball.y > this.y - ball.size/2 && ball.y < this.y + this.height + ball.size/2) {
            return true;
        } else {
            return false;
        }
    }
}
