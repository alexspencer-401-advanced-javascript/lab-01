const Model = require('../lib/model');

const schemaConfig = {
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  married: { type: 'boolean' },
  kids: { type: 'number' }
};

const modelExample = new Model('example', schemaConfig);

module.exports = modelExample;