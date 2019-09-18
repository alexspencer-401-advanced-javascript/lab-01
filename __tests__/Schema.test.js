const Schema = require('../lib/Schema');

describe('Schema', () => {

  const personSchema = {
    firstName: { type: 'string', required: true }, 
    lastName: { type: 'string', required: true },
    married: { type: 'boolean' },
    kids: { type: 'number' }
}
  
const schema = new Schema(personSchema) {

}

  it('validates a correct model', () => {

    schema.validate(validModel)
  });

  it('throws on invalid model', () => {

  });

  // more test cases...
});