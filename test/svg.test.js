const svg = require("../lib/svg");
const answers = {
  name: "FFF",
  textColor: "000000",
  fontFamily: "Tahoma",
  fontSize: "55",
  shape: "square",
  shapeColorType: "solid",
  shapeColor: "blue",
  strokeWidth: "0",
};

describe("Make SVG", () => {
  describe("Fonts", () => {
    it("should add a generic backup font when provided a font family", () => {
      const oldFontFamily = answers.fontFamily;
      svg.makeSVG(answers);
      const newFontFamily = answers.fontFamily;
      expect(newFontFamily).toEqual(oldFontFamily + ", san-serif");
    });
  });
  describe("Border Color", () => {
    it("should assign the main shape color if stroke color is undefined", () => {
      svg.makeSVG(answers);
      expect(answers.strokeColor).toEqual(answers.shapeColor);
    });
  });
  describe("Hex Colors", () => {
    it("should verify that hex colors start with '#'", () => {
      svg.makeSVG(answers);
      expect(answers.textColor[0]).toEqual("#");
    });
  });
});
