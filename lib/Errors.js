class CannotCoerceError extends Error {
  constructor(expectedType, providedValue) {
    super(`cannot coerce data`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  
}

module.exports = {
  CannotCoerceError,
  ModelError
};