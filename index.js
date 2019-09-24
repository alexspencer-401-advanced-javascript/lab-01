// const validator = require('./lib/validator.js');
const Database = require('./lib/database');
const modelExample = require('./models/model-config');

Database.connect();
// console.log(validator.isString('hello world'));

const modelOne = {
  firstName: 'Steve',
  lastName: 'Smith',
  married: true,
  kids: 2
};

const modelTwo = {
  firstName: 'Bobby',
  lastName: 'Ricky',
  married: false,
  kids: 1
};

modelExample.create(modelOne)
  .then((response) => {
    console.log(response);
    modelExample.findById(response.id)
      .then((model) => {
        console.log(model);
      }); //console log or return?
  });

modelExample.create(modelTwo)
  .then((response) => {
    console.log(response);
    modelExample.findById(response.id)
      .then((model) => {
        console.log(model);
      });
  });
  
modelExample.find()
  .then((response) => {
    console.log(response);
  });

