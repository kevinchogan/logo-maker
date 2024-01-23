const Letter = require("../lib/shapes");
const shape = require("../lib/shapes");

describe("Circle", () => {
  it("should have a render() method that returns a string for the corresponding SVG file with the given shape color", () => {
    const polygon = new shape.Circle("blue", "red");
    expect(polygon.render()).toEqual(
      '<circle cx="110" cy="110" r="100" fill="red" stroke-width="0" stroke="blue"/>'
    );
  });
});
describe("Square", () => {
  it("should have a render() method that returns a string for the corresponding SVG file with the given shape color", () => {
    const polygon = new shape.Square("blue", "red");
    expect(polygon.render()).toEqual(
      '<rect x="10" y="10" width="200" height="200" fill="red" stroke-width="0" stroke="blue"/>'
    );
  });
});

describe("Triangle", () => {
  it("should have a render() method that returns a string for the corresponding SVG file with the given shape color", () => {
    const polygon = new shape.Triangle("blue", "red");
    expect(polygon.render()).toEqual(
      '<polygon points="10,210 110,10 210,210" fill="red" stroke-width="0" stroke="blue"/>'
    );
  });
});
