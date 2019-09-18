const error = require('./Errors');

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
const isNumber = input => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isArray = input => {
  return input instanceof Array;
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
const isObject = input => {
  if(isArray(input)) {
    return false;
  } else if(String(input) === String({})) {
    return typeof input === 'object';
  }
};

/**
 * Is this a boolean?
 * @param input 
 * @returns {boolean}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
const isFunction = input => {
  return input instanceof Function;
};

/**
 * Is this an array of strings?
 * @param input 
 * @returns {boolean}
 */
const isArrayOfStrings = (arr) => {
  return arr.every(isString);
};

/**
 * Is this an array of numbers?
 * @param input
 * @returns {boolean}
 */
const isArrayOfNumbers = (arr) => {
  return arr.every(isNumber);
};

/**
 * Is this an array of numbers?
 * @param input
 * @returns {boolean}
 */
const isArrayOfObjects = (arr) => {
  return arr.every(isObject);
};

/**
 * Is this an array of numbers?
 * @param input
 * @returns {boolean}
 */
const isArrayOfBooleans = (arr) => {
  return arr.every(isBoolean);
};

/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */
const getValidator = (input) => {
  const validatorObject = {
    string: isString,
    strings: isArrayOfStrings,
    number: isNumber,
    numbers: isArrayOfNumbers,
    array: isArray,
    object: isObject,
    objects: isArrayOfObjects,
    boolean: isBoolean,
    booleans: isArrayOfBooleans,
    function: isFunction,
  };
  return validatorObject[input];
};

/**
 * Can it be coerced?
 */
const castString = (input) => {
  if(isArray(input) || isObject(input)) {
    throw new error.CannotCoerceError(input);
  } else {
    return String(input);
  }
};

const castNumber = (input) => {
  if(isNumber(input)) {
    return Number(input);
  } else if(isString(input)) {
    if(input.match(/[0-9]/)) {
      return Number(input);
    } else {
      throw new error.CannotCoerceError(input);
    }}
  else {
    throw new error.CannotCoerceError(input);
  }
};

const castBoolean = (input) => {
  if(isBoolean(input)) {
    return Boolean(input);
  } else if(isString(input)) {
    if(input === 'true') {
      return true;
    } else if(input === 'false') {
      return false;
    } else {
      throw new error.CannotCoerceError(input);
    }
  } else if(isNumber(input)) {
    if(input === 0 || input === 1) {
      return Boolean(input);
    } else {
      throw new error.CannotCoerceError(input);
    }
  } else {
    throw new error.CannotCoerceError(input);
  }
};

const castDate = (input) => {
  if(typeof input === 'object' && String(input).match(/\w{4}[Time)]$/)) {
    return String(input);
  } else {
    throw new error.CannotCoerceError(input);
  }
};

/**
 * Based on a set of rules, what is correct caster?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */

const getCaster = (input) => {
  const casterObject = {
    string: castString,
    number: castNumber,
    boolean: castBoolean,
    date: castDate
  };
  return casterObject[input];
};

module.exports = {
  isString,
  isNumber,
  isArray,
  isObject,
  isBoolean,
  isFunction,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,
  isArrayOfStrings,
  castString,
  castNumber,
  castBoolean,
  castDate,
  getValidator,
  getCaster
};


