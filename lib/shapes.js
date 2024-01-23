class Shape {
  constructor(stroke, fill) {
    this.width = 120;
    this.height = 130;
    this.stroke = stroke;
    this.strokeWidth = 0;
    this.fill = fill;
    this.x = 10;
    this.y = 10;
  }

  svgHeader() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">`;
  }

  svgFooter() {
    return '</svg>';
  }
}

class Circle extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
    this.r = 50;
  }

  render() {
    return `<circle cx="${this.x}" cy="${this.y}" r="${this.r}" 
fill="${this.fill}" stroke-width="${this.strokeWidth}" stroke="${this.stroke}"/>`;
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
    this.triHeight = 100;
    this.triWidth = 100;
  }

  render() {
    const aX = this.x;
    const aY = this.y + this.triHeight;
    const bX = this.x + this.triWidth / 2;
    const bY = this.y;
    const cX = this.x + this.triWidth;
    const cY = this.y + this.triHeight;

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