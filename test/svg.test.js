const svg = require("../lib/svg");
const utils = require("../lib/utils");

const answers = utils.answers;

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
