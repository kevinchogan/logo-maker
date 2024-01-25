const input = require("./lib/input.js");
const examples = require("./lib/examples.js");

process.argv[2] === "-e" ? examples.makeExamples() : input.askQuestions();