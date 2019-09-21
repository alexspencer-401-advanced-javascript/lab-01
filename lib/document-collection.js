const files = require('./files');
// use npm to find a module for creating ids
const shortid = require('shortid');

class DocumentCollection {
  constructor(folder) {
    this.folder = folder;
  }

  save(object) { // Takes an object, assigns an id, and saves that object. 
    object.id = shortid.generate();
    const serialObject = JSON.stringify(object);
    const fileName = `./${this.folder}/${object.id}.json`;
    return files.writeFile(fileName, serialObject)
      .then(() => {
        return object;
      })
      .catch(err => {
        console.log('***ERROR:', err);
      });
  }

  get(id) { // Is able to grab an object by its id by using the file path, and parsing the JSON contents of that file. 
    const filePath = `./${this.folder}/${id}.json`;
    return files.readFile(filePath) // Reads files on your computer, in this instance reads the file at the defined file path. 
      .then((contents) => {
        return JSON.parse(contents);
      })
      .catch(err => {
        console.log('***ERROR:', err);
      });
  }

  getAll() { // Able to go into any path, and specific folder, to grab all of the contents. 
    return files.readdir(this.folder) // Reads the director of a given path, in this case, a folder. this.folder = 'document'
      .then((files) => {
        return Promise.all(files.map(file => {
          return this.get(file.substring(0, file.length - 5));
        }));
      })
      .catch(err => {
        console.log('***ERROR:', err);
      });
  }
}

module.exports = DocumentCollection;
