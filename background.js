class GameBackground{
    constructor(){
        this.hexSize = 55;
        this.yOffset = (3 / 2) * this.hexSize; 
        this.xOffset = sqrt(3) * this.hexSize;
        this.bgColor = color(50, 50, 150);
        this.hexColor = color(20, 20, 130); 

    }


    draw() {
        background(this.bgColor);

        for (let x = 0; x < width; x += this.xOffset) {
            for (let y = 0; y < height; y += this.yOffset) {
            this.drawHexagon(x, y, this.hexSize, this.hexColor);
                if (x + this.xOffset / 2 < width) {
                this.drawHexagon(x + this.xOffset / 2, y + this.yOffset / 2, this.hexSize, this.hexColor);
                }
            }
        }
    }


    // Background zeichnen 
    drawHexagon(x, y, s, col) {
    fill(col);
    beginShape();
    for (let j = 0; j < TWO_PI; j += TWO_PI / 6) {
        let hexX = x + s * cos(j);
        let hexY = y + s * sin(j);
        vertex(hexX, hexY);
    }
    endShape(CLOSE);
    }
}

