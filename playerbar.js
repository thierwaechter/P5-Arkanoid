class PlayerBar {
  constructor(size) {
    this.x = gameWidth / 2 - size / 2;
    this.y = height - 50;
    this.width = size;
    this.height = 20;
  }

  show() {
    noStroke();
    fill(150, 150, 150);
    rect(this.x, this.y, this.width, this.height, 20);
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= 8;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < gameWidth - this.width) {
      this.x += 8;
    }
  }
}
