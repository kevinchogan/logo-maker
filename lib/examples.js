const answers = require("./answers");
const svg = require("./svg");
const utils = require("./utils");

const makeExamples = () => {
  for (let i = 0; i < answers.length; i++) {
    const text = svg.makeSVG(answers[i]);
    const filename = `./examples/${answers[i].name}.svg`;
    utils.writeFile(filename, text);
  }
};

module.exports = { makeExamples };
