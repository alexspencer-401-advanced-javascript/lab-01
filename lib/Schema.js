/* import and use validators */

class Schema {
  /**
   * Create a model schema
   * @param {object} schema - the schema to apply to models
   */
  constructor(schema) {
    this.schema = schema;

  }

  /** 
   * Run validation on the supplied model 
   * @param {object} model - the model to validate
   * @throws {ModelError} throws if model does not conform to schema
   * @returns {object} - validated data record
   */

  validate(model) {
    // Object.keys
    // Object.entries
    // Get this all from the schema -- compare to array
    // THis is where we're pretending to be a user. Input information. 
  }
}

module.exports = Schema;