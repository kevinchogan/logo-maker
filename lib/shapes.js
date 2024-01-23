const Shape = require("./Shape");

class Circle extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
    this.r = 100;
    this.x += this.r;
    this.y += this.r;
  }

  render() {
    return `<circle cx="${this.x}" cy="${this.y}" r="${this.r}" fill="${this.fill}" stroke-width="${this.strokeWidth}" stroke="${this.stroke}"/>`;
  }
}

class Square extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
    this.size = 200;
  }

  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.size}" height="${this.size}" fill="${this.fill}" stroke-width="${this.strokeWidth}" stroke="${this.stroke}"/>`;
  }
}

class Triangle extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
    this.triHeight = 200;
    this.triWidth = 200;
    this.textY = "75%";
  }

  render() {
    const aX = this.x;
    const aY = this.y + this.triHeight;
    const bX = this.x + this.triWidth / 2;
    const bY = this.y;
    const cX = this.x + this.triWidth;
    const cY = this.y + this.triHeight;

    return `<polygon points="${aX},${aY} ${bX},${bY} ${cX},${cY}" fill="${this.fill}" stroke-width="${this.strokeWidth}" stroke="${this.stroke}"/>`;
  }
}

module.exports = {
    Circle,
    Square,
    Triangle,
  };