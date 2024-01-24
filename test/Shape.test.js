const Shape = require("../lib/Shape");

describe("Shape", () => {
  it("should create an object with fill and border colors if provided valid arguments", () => {
    const circle = new Shape("red", "yellow");
    expect(circle.stroke).toEqual("red");
    expect(circle.fill).toEqual("yellow");
  });

  it("should throw an error if provided no arguments", () => {
    const cb = () => new Shape();
    expect(cb).toThrow();
  });

  it("should throw an error if not provided a 'fill' color", () => {
    const cb = () => new Shape("blue");
    const err = new Error("Expected parameter 'fill' to be a non-empty string");
    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'stroke' color is not a valid color or hex number", () => {
    const cb = () => new Shape("X", "blue");
    const err = new Error(
      "Expected parameter 'stroke' to be either a valid color or a hex number"
    );
    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'fill' color is not a valid color or hex number", () => {
    const cb = () => new Shape("blue", "X");
    const err = new Error(
      "Expected parameter 'fill' to be either a valid color or a hex number"
    );
    expect(cb).toThrowError(err);
  });  
});

