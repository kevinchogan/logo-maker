const colors = require("./colors");
const utils = require("./utils");

/* === Shape Class ===
Extends from shape and adds radius (r) and adjusts positioning to account for radius based render
=== Shape Class ===*/
class Shape {
  constructor(stroke, fill) {
    // verifies stroke parameter is of the correct type and is present
    if (typeof stroke !== "string" || !stroke.trim().length) {
      throw new Error("Expected parameter 'stroke' to be a non-empty string");
    }
    // verifies fill parameter is of the correct type and is present
    if (typeof fill !== "string" || !fill.trim().length) {
      throw new Error("Expected parameter 'fill' to be a non-empty string");
    }
    // verifies stroke color is valid
    if (!(utils.isValidColor(stroke) || stroke === "url(#grad1)")) {
      throw new Error(
        "Expected parameter 'stroke' to be either a valid color or a hex number"
      );
    }
    // verifies fill color is valid
    if (!(utils.isValidColor(fill) || fill === "url(#grad1)")) {
      throw new Error(
        "Expected parameter 'fill' to be either a valid color or a hex number"
      );
    }
    // adds "#" to hex colors
    stroke = utils.checkHex(stroke);
    fill = utils.checkHex(fill);

    this.width = 220; // sized to allow for enough room for size 200 shapes plus room (10) for borders
    this.height = 220;
    this.stroke = stroke;
    this.strokeWidth = 0;
    this.fill = fill;
    this.x = 10;
    this.y = 10;
    this.textX = "50%";
    this.textY = "53%";
  }
  // creates header of svg file
  svgHeader() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">`;
  }
  // closes header of svg file
  svgFooter() {
    return "</svg>";
  }
  // overrides the assigned fill color of shape
  setColor(color) {
    this.fill = utils.checkHex(color);
  }
  // overrides default border size (0)
  setStrokeWidth(strokeWidth) {
    this.strokeWidth = strokeWidth;
  }
}

module.exports = Shape;
