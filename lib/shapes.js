const Shape = require("./Shape");

/* === Circle Class ===
Extends from shape and adds radius (r) and adjusts positioning to account for radius based render
=== Circle Class ===*/
class Circle extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
    this.r = 100;
    this.x += this.r;
    this.y += this.r;
  }

  render() {
    return `<circle cx="${this.x}" cy="${this.y}" r="${this.r}" fill="${this.fill}" stroke-width="${this.strokeWidth}" stroke="${this.stroke}"/>`;
  }
}

/* === Square Class ===
Extends from shape and adds size used for both width and height
=== Square Class ===*/
class Square extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
    this.size = 200;
  }

  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.size}" height="${this.size}" fill="${this.fill}" stroke-width="${this.strokeWidth}" stroke="${this.stroke}"/>`;
  }
}

/* === Triangle Class ===
Extends from shape and adds triangle height and width separately in case we want them to differ.
Updates the positioning of the text (lower) to account for the space available on a triangle.
Calculates the point positions of a poly based on the triangle h and w
=== Triangle Class ===*/
class Triangle extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
    this.triHeight = 200;
    this.triWidth = 200;
    this.textY = "75%";
  }

  render() {
    const aX = this.x;
    const aY = this.y + this.triHeight;
    const bX = this.x + this.triWidth / 2;
    const bY = this.y;
    const cX = this.x + this.triWidth;
    const cY = this.y + this.triHeight;

    return `<polygon points="${aX},${aY} ${bX},${bY} ${cX},${cY}" fill="${this.fill}" stroke-width="${this.strokeWidth}" stroke="${this.stroke}"/>`;
  }
}

/* === Polygon Class ===
Extends from shape and allows the user to make an equilateral polygon of any point count.  
Takes in points to specify number of vertices
Calculates point positions based on point radii at each angle in 360 degrees divided by point count
=== Polygon Class ===*/
class Polygon extends Shape {
  constructor(stroke, fill, points) {
    if (typeof points !== "number") {
      throw new Error("Expected parameter 'points' to be a non-empty number");
    }
  
    super(stroke, fill);
    this.size = 200;
    this.points = points;
  }
  
  render() {
    const radius = this.size / 2;
    const center = this.size / 2 + 10; // adds an offset to leave room for borders if desired

    const coord = []; //array of point coordinates
    let coordText; // text used in polygon points derives from coordinates array

    for (let i = 0; i < this.points; i++) {
      const angle =
        ((i * (360 / this.points) - 180 / this.points + 90) * Math.PI) / 180; // Convert degrees to radians and adjust for starting angle
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      coord.push({ x, y });
    }
    // builds coordText from coord array
    coordText = coord.map((c) => `${c.x},${c.y} `).join("");  
    return `<polygon points="${coordText}" fill="${this.fill}" stroke-width="${this.strokeWidth}" stroke="${this.stroke}"/>`;
  }
}


module.exports = {
  Circle,
  Square,
  Triangle,
  Polygon,
};
