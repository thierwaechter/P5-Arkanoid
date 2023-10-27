class PlayerBar {
  constructor(size) {
    this.x = width / 2 - size / 2;
    this.y = height - 50;
    this.width = size;
    this.height = 30;
  }

  show() {
    noStroke();
    fill(100, 100, 100);
    rect(this.x, this.y, this.width, this.height, 20);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
  }
}
