const utils = require("../lib/utils");

describe("Utilities", () => {
  describe("Check Hex", () => {
    it("should return the color with '#' added to the front when the color is a 6 digit hex", () => {
      const newHex = utils.checkHex("FFFFFF");
      expect(newHex).toEqual("#FFFFFF");
    });

    it("should return the original color when the color is not a 6 digit hex", () => {
      const newHex = utils.checkHex("blue");
      expect(newHex).toEqual("blue");
    });

    it("should return the original string when the color is hex but not 6 digits", () => {
      const newHex = utils.checkHex("FFF");
      expect(newHex).toEqual("FFF");
    });
  });

  describe("Is Valid Color", () => {
    it("should return the 'true' when the color is a 6 digit hex", () => {
      const result = utils.isValidColor("FFFFFF");
      expect(result).toEqual(true);
    });

    it("should return the 'true' when the color is a valid color name", () => {
      const result = utils.isValidColor("blue");
      expect(result).toEqual(true);
    });

    it("should return 'false' when the color is hex but not 6 digits", () => {
      const result = utils.isValidColor("FFF");
      expect(result).toEqual(false);
    });

    it("should return the 'false' when the color is NOT a valid color name", () => {
      const result = utils.isValidColor("reed");
      expect(result).toEqual(false);
    });
  });

  describe("Is Number", () => {
    it("should return the 'true' when the input is a valid number", () => {
      const result = utils.isNumber(63);
      expect(result).toEqual(true);
    });

    it("should return the 'false' when the input is a string", () => {
      const result = utils.isNumber("X");
      expect(result).toEqual(false);
    });

    it("should return the 'false' when the input is an object", () => {
      const obj = utils.answers;
      const result = utils.isNumber(obj);
      expect(result).toEqual(false);
    });
  });
});
