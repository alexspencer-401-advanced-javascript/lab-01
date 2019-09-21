const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile); // https://www.w3schools.com/nodejs/nodejs_filesystem.asp **The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
const readdir = promisify(fs.readdir);

module.exports = {
  readFile,
  writeFile,
  readdir
};