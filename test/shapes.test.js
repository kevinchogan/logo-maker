const shape = require("../lib/shapes");

describe("Circle", () => {
  it("should create an object with fill and border colors if provided valid arguments", () => {
    const circle = new shape.Circle("red", "yellow");
    expect(circle.stroke).toEqual("red");
    expect(circle.fill).toEqual("yellow");
  });

  it("should throw an error if provided no arguments", () => {
    const cb = () => new shape.Circle();
    expect(cb).toThrow();
  });

  it("should throw an error if not provided a 'fill' color", () => {
    const cb = () => new shape.Circle("blue");
    const err = new Error("Expected parameter 'fill' to be a non-empty string");
    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'stroke' color is not a valid color or hex number", () => {
    const cb = () => new shape.Circle("X", "blue");
    const err = new Error(
      "Expected parameter 'stroke' to be either a valid color or a hex number"
    );
    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'fill' color is not a valid color or hex number", () => {
    const cb = () => new shape.Circle("blue", "X");
    const err = new Error(
      "Expected parameter 'fill' to be either a valid color or a hex number"
    );
    expect(cb).toThrowError(err);
  });

  it("should have a render() method that returns a string for the corresponding SVG file with the given shape color", () => {
    const circle = new shape.Circle("blue", "red");
    expect(circle.render()).toEqual(
      '<circle cx="110" cy="110" r="100" fill="red" stroke-width="0" stroke="blue"/>'
    );
  });
});

describe("Square", () => {
  it("should create an object with fill and border colors if provided valid arguments", () => {
    const square = new shape.Square("red", "yellow");
    expect(square.stroke).toEqual("red");
    expect(square.fill).toEqual("yellow");
  });

  it("should throw an error if provided no arguments", () => {
    const cb = () => new shape.Square();
    expect(cb).toThrow();
  });

  it("should throw an error if not provided a 'fill' color", () => {
    const cb = () => new shape.Square("blue");
    const err = new Error("Expected parameter 'fill' to be a non-empty string");
    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'stroke' color is not a valid color or hex number", () => {
    const cb = () => new shape.Square("X", "blue");
    const err = new Error(
      "Expected parameter 'stroke' to be either a valid color or a hex number"
    );
    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'fill' color is not a valid color or hex number", () => {
    const cb = () => new shape.Square("blue", "X");
    const err = new Error(
      "Expected parameter 'fill' to be either a valid color or a hex number"
    );
    expect(cb).toThrowError(err);
  });

  it("should have a render() method that returns a string for the corresponding SVG file with the given shape color", () => {
    const square = new shape.Square("blue", "red");
    expect(square.render()).toEqual(
      '<rect x="10" y="10" width="200" height="200" fill="red" stroke-width="0" stroke="blue"/>'
    );
  });
});

describe("Triangle", () => {
  it("should create an object with fill and border colors if provided valid arguments", () => {
    const triangle = new shape.Triangle("red", "yellow");
    expect(triangle.stroke).toEqual("red");
    expect(triangle.fill).toEqual("yellow");
  });

  it("should throw an error if provided no arguments", () => {
    const cb = () => new shape.Triangle();
    expect(cb).toThrow();
  });

  it("should throw an error if not provided a 'fill' color", () => {
    const cb = () => new shape.Triangle("blue");
    const err = new Error("Expected parameter 'fill' to be a non-empty string");
    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'stroke' color is not a valid color or hex number", () => {
    const cb = () => new shape.Triangle("X", "blue");
    const err = new Error(
      "Expected parameter 'stroke' to be either a valid color or a hex number"
    );
    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'fill' color is not a valid color or hex number", () => {
    const cb = () => new shape.Triangle("blue", "X");
    const err = new Error(
      "Expected parameter 'fill' to be either a valid color or a hex number"
    );
    expect(cb).toThrowError(err);
  });

  it("should have a render() method that returns a string for the corresponding SVG file with the given shape color", () => {
    const triangle = new shape.Triangle("blue", "red");
    expect(triangle.render()).toEqual(
      '<polygon points="10,210 110,10 210,210" fill="red" stroke-width="0" stroke="blue"/>'
    );
  });
});

describe("Polygon", () => {
  it("should create an object with fill and border colors if provided valid arguments", () => {
    const polygon = new shape.Polygon("red", "yellow", 8);
    expect(polygon.stroke).toEqual("red");
    expect(polygon.fill).toEqual("yellow");
  });

  it("should throw an error if provided no arguments", () => {
    const cb = () => new shape.Polygon();
    expect(cb).toThrow();
  });

  it("should throw an error if 'stroke' color is not a valid color or hex number", () => {
    const cb = () => new shape.Polygon("X", "blue", 8);
    const err = new Error(
      "Expected parameter 'stroke' to be either a valid color or a hex number"
    );
    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'fill' color is not a valid color or hex number", () => {
    const cb = () => new shape.Polygon("blue", "X", 8);
    const err = new Error(
      "Expected parameter 'fill' to be either a valid color or a hex number"
    );
    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'points' is not a valid number", () => {
    const cb = () => new shape.Polygon("blue", "red", "X");
    const err = new Error(
      "Expected parameter 'points' to be a non-empty number"
    );
    expect(cb).toThrowError(err);
  });
});
