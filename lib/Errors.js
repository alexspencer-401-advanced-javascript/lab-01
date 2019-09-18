class CannotCoerceError extends Error {
  constructor(expectedType, providedValue) {
    super(`cannot coerce data`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  constructor(input) {
    super(`this model cannot be coerced because of ${input}`);
  }
}

module.exports = {
  CannotCoerceError,
  ModelError
};