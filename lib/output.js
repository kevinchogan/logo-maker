const fs = require("fs");

const writeFile = (text) => {
    fs.writeFile("logo.svg", text, error => {
        error ? console.error(error) : console.log('Generated logo.svg');
    });
}

module.exports = {writeFile};