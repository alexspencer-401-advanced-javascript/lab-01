
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
  } else {
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
  getValidator
};

