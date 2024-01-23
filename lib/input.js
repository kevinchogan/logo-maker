const inquirer = require("inquirer");
const output = require("./output");
const colors = require("./colors");
const svg = require("./svg");

const askQuestions = () => {
    inquirer
    .prompt([
      {
        type: "input",
        message: "Please provide text of up to three characters.",
        name: "name",
        validate: function (input) {
          const isValid = input.length < 4;
          return isValid
            ? true
            : "Invalid text. Please provide 3 characters or less.";
        },
      },
      {
        type: "input",
        message:
          "What color would you like your text to be? (enter a color keyword or a hexadecimal number)",
        name: "textColor",
        validate: function (input) {
          const isValid =
            colors
              .map((color) => color.toLowerCase() === input.toLowerCase())
              .reduce((bool1, bool2) => bool1 || bool2) ||
            /^[0-9A-Fa-f]+$/.test(input);
          return isValid
            ? true
            : "This is not a valid color or hexadecimal number.  Please try again.";
        },
      },
      {
        type: "list",
        message: "What shape would you like your logo to use?",
        name: "shape",
        choices: ["square", "circle", "triangle"],
      },
      {
        type: "input",
        message:
          "What color would you like your shape to be? (enter a color keyword or a hexadecimal number)",
        name: "shapeColor",
        validate: function (input) {
          const isValid =
            colors
              .map((color) => color.toLowerCase() === input.toLowerCase())
              .reduce((bool1, bool2) => bool1 || bool2) ||
            /^[0-9A-Fa-f]+$/.test(input);
          return isValid
            ? true
            : "This is not a valid color or hexadecimal number.  Please try again.";
        },
      },
    ])
    .then((answers) => {
      const text = svg.makeSVG(answers);
      output.writeFile(text);
    });
}
//askQuestions();
module.exports = {askQuestions};
