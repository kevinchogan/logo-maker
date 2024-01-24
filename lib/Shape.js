const colors = require("./colors");

class Shape {
  constructor(stroke, fill) {
    if (typeof stroke !== "string" || !stroke.trim().length) {
      throw new Error("Expected parameter 'stroke' to be a non-empty string");
    }

    if (typeof fill !== "string" || !fill.trim().length) {
      throw new Error("Expected parameter 'fill' to be a non-empty string");
    }
    if (
      !(
        colors
          .map((color) => color.toLowerCase() === stroke.toLowerCase())
          .reduce((bool1, bool2) => bool1 || bool2) ||
        /^[0-9A-Fa-f]+$/.test(stroke)
      )
    ) {
      throw new Error(
        "Expected parameter 'stroke' to be either a valid color or a hex number"
      );
    }
    if (
      !(
        colors
          .map((color) => color.toLowerCase() === fill.toLowerCase())
          .reduce((bool1, bool2) => bool1 || bool2) ||
        /^[0-9A-Fa-f]+$/.test(fill)
      )
    ) {
      throw new Error(
        "Expected parameter 'fill' to be either a valid color or a hex number"
      );
    }
    if (/^[0-9A-Fa-f]+$/.test(stroke)) {
      stroke = "#" + stroke;
    }
    if (/^[0-9A-Fa-f]+$/.test(fill)) {
      fill = "#" + fill;
    }

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
    return "</svg>";
  }

  setColor(color) {
    this.fill = color;
  }
}

module.exports = Shape;
