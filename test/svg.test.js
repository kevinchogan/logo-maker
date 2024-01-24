const svg = require("../lib/svg");
const answers = require("../lib/answers");

describe("Make SVG", () => {
  describe("Fonts", () => {
    it("should add a generic backup font when provided a font family", () => {
      const oldFontFamily = answers[0].fontFamily;
      svg.makeSVG(answers[0]);
      const newFontFamily = answers[0].fontFamily;
      expect(newFontFamily).toEqual(oldFontFamily + ", san-serif");
    });
  });
  describe("Border Color", () => {
    it("should assign the main shape color if stroke color is undefined", () => {
      svg.makeSVG(answers[0]);
      expect(answers[0].strokeColor).toEqual(answers[0].shapeColor);
    });
  });
  describe("Hex Colors", () => {
    it("should verify that hex colors start with '#'", () => {
      svg.makeSVG(answers[0]);
      expect(answers[0].textColor[0]).toEqual("#");
    });
  });
});
