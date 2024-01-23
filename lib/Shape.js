class Shape {
    constructor(stroke, fill) {
      this.width = 220;
      this.height = 220;
      this.stroke = stroke;
      this.strokeWidth = 0;
      this.fill = fill;
      this.x = 10;
      this.y = 10;
      this.textX = "50%";
      this.textY = "50%";
    }
  
    svgHeader() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">`;
    }
  
    svgFooter() {
      return '</svg>';
    }

    setColor(color) {
      this.fill = color;
    }
  }

 module.exports = Shape;