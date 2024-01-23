const shape = require("./shapes");

const makeSVG = answers => {
    switch (answers.shape) {
        case "square":
            logoShape = new shape.Square(answers.shapeColor, answers.shapeColor);
            break;
        case "circle":
            logoShape = new shape.Circle(answers.shapeColor, answers.shapeColor);
            break;
        case "triangle":
            logoShape = new shape.Triangle(answers.shapeColor, answers.shapeColor);
    }
    let text = logoShape.svgHeader() + '\n';
    text += logoShape.render() + '\n';
    text += `<text x="50%" y="50%" font-size="36" text-anchor="middle" alignment-baseline="middle" fill="${answers.textColor}">${answers.name}</text>\n`
    text += logoShape.svgFooter();
    return text;
}

module.exports = {makeSVG};