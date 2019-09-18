const SchemaValidator = require('../lib/Schema');
const errors = require('../lib/Errors');

describe('Schema', () => {

  const personSchema = {
    firstName: { type: 'string', required: true }, 
    lastName: { type: 'string', required: true },
    married: { type: 'boolean' },
    kids: { type: 'number' }
  };
  
  const schemaValidator = new SchemaValidator(personSchema);

  const validModel = {
    firstName: 'Alex',
    lastName: 'Spencer',
    married: true,
    kids: 3
  };

  const secondValidModel = {
    firstName: 'Alex',
    lastName: 'Spencer',
    married: 'true',
    kids: 3
  };

  const invalidModel = {
    firstName: [],
    lastName: 'Spencer',
    married: 'true',
    kids: 3
  };

  it('validates a correct model', () => {
    expect(schemaValidator.validate(validModel)).toEqual(validModel);
  });

  it('validates a coerced correct model', () => {
    expect(schemaValidator.validate(secondValidModel)).toEqual(validModel);
  });

  it('throws on invalid model', () => {
    expect(() => {
      schemaValidator.validate(invalidModel);
    }).toThrow(errors.ModelError);
  });
});