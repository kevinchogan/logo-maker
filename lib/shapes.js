class Shape {
  constructor(stroke, fill) {
    this.width = 500;
    this.height = 500;
    this.stroke = stroke;
    this.strokeWidth = 5;
    this.fill = fill;
    this.x = 10;
    this.y = 10;
  }

  render() {
    return `<svg width="${this.width}" height="${this.height}">`;
  }
}

class Circle extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
    this.r = 50;
  }

  render() {
    return `<circle cx="${this.x}" cy="${this.y}" r="${this.r}" 
stroke="${this.stroke}" stroke-width="${this.strokeWidth}" fill="${this.fill}" />`;
  }
}

class Square extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
    this.size = 100;
  }

  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.size}" height="${this.size}" 
fill="${this.fill}" stroke-width="${this.strokeWidth}" stroke="${this.stroke}"/>`;
  }
}

class Triangle extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
    this.height = 100;
    this.width = 100;
  }

  render() {
    const aX = this.x;
    const aY = this.y + this.height;
    const bX = this.x + this.width / 2;
    const bY = this.y;
    const cX = this.x + this.width;
    const cY = this.y + this.height;

    return `<polygon points="${aX},${aY} ${bX},${bY} ${cX},${cY}" 
fill="${this.fill}" stroke-width="${this.strokeWidth}" stroke="${this.stroke}"/>`;
  }
}

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
  };