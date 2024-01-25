const fs = require("fs");
const colors = require("./colors");

/* === checkHex ===
Checks if a color is hex and adds the '#' symbol tot he front if so
=== checkHex ===*/
const checkHex = (color) => {
  if (/^[0-9A-Fa-f]+$/.test(color) && color.length === 6) {
    const hexColor = "#" + color;
    return hexColor;
  }
  return color;
};

/* === isValidColor ===
Checks a list of color names to ensure that the color is a valid CSS name or checks
if the color is a hex number and is 6 digits
=== isValidColor ===*/
const isValidColor = (input) => {
  return (
    colors
      .map((color) => color.toLowerCase() === input.toLowerCase())
      .reduce((bool1, bool2) => bool1 || bool2) ||
    (/^[0-9A-Fa-f]+$/.test(input) && input.length === 6)
  );
};

const isNumber = (input) => {
  return /[0-9]/.test(input);
};

/* === writeFile ===
Writes file with 'text' as contents to 'filename'
=== writeFile ===*/
const writeFile = (filename, text) => {
  fs.writeFile(filename, text, (error) => {
    error ? console.error(error) : console.log(`Generated ${filename}`);
  });
};

module.exports = {
  writeFile,
  checkHex,
  isValidColor,
  isNumber,
};
