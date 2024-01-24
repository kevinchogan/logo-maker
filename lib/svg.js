const shape = require("./shapes");

const makeSVG = answers => {
    if (!answers.strokeColor) {
        answers.strokeColor = answers.shapeColor
    }

    switch (answers.fontFamily) {
        case "Arial":
        case "Verdana":
        case "Tahoma":
        case "Trebuchet MS":
            answers.fontFamily += ", san-serif";
            break;
        case "Times New Roman":
        case "Georgia":
        case "Garamond":
            answers.fontFamily += ", serif";
            break;
        case "Courier New":
            answers.fontFamily += ", monospace";
            break;
        case "Brush Script MT":
            answers.fontFamily += ", cursive";
    }

    switch (answers.shape) {
        case "square":
            logoShape = new shape.Square(answers.strokeColor, answers.shapeColor);
            break;
        case "circle":
            logoShape = new shape.Circle(answers.strokeColor, answers.shapeColor);
            break;
        case "triangle":
            logoShape = new shape.Triangle(answers.strokeColor, answers.shapeColor);
    }
    if (answers.strokeWidth > 0) {
        logoShape.setStrokeWidth(answers.strokeWidth)
    }
    let text = logoShape.svgHeader() + '\n';
    text += logoShape.render() + '\n';
    if (/^[0-9A-Fa-f]+$/.test(answers.textColor)) {
        answers.textColor = "#" + answers.textColor;
    }
    text += `<text x="${logoShape.textX}" y="${logoShape.textY}" font-family="${answers.fontFamily}" font-size="${answers.fontSize}" text-anchor="middle" alignment-baseline="middle" fill="${answers.textColor}">${answers.name}</text>\n`
    text += logoShape.svgFooter();
    return text;
}

module.exports = {makeSVG};