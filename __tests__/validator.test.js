const validator = require('../lib/validator.js');
const error = require('../lib/Errors');

describe('validator module', () => {
  
  const str = 'yes';
  const num = 1;
  const arr = ['a'];
  const obj = { x: 'y' };
  const func = () => {};
  const bool = false;

  describe('performs basic validation of', () => {

    it('strings', () => {
      expect(validator.isString(str)).toBeTruthy();
      expect(validator.isString(num)).toBeFalsy();
      expect(validator.isString(arr)).toBeFalsy();
      expect(validator.isString(obj)).toBeFalsy();
      expect(validator.isString(func)).toBeFalsy();
      expect(validator.isString(bool)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isNumber(str)).toBeFalsy();
      expect(validator.isNumber(num)).toBeTruthy();
      expect(validator.isNumber(arr)).toBeFalsy();
      expect(validator.isNumber(obj)).toBeFalsy();
      expect(validator.isNumber(func)).toBeFalsy();
      expect(validator.isNumber(bool)).toBeFalsy();
    });

    it('arrays', () => {
      expect(validator.isArray(str)).toBeFalsy();
      expect(validator.isArray(num)).toBeFalsy();
      expect(validator.isArray(arr)).toBeTruthy();
      expect(validator.isArray(obj)).toBeFalsy();
      expect(validator.isArray(func)).toBeFalsy();
      expect(validator.isArray(bool)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isObject(str)).toBeFalsy();
      expect(validator.isObject(num)).toBeFalsy();
      expect(validator.isObject(arr)).toBeFalsy();
      expect(validator.isObject(obj)).toBeTruthy();
      expect(validator.isObject(func)).toBeFalsy();
      expect(validator.isObject(bool)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isBoolean(str)).toBeFalsy();
      expect(validator.isBoolean(num)).toBeFalsy();
      expect(validator.isBoolean(arr)).toBeFalsy();
      expect(validator.isBoolean(obj)).toBeFalsy();
      expect(validator.isBoolean(func)).toBeFalsy();
      expect(validator.isBoolean(bool)).toBeTruthy();
    });

    it('functions', () => {
      expect(validator.isFunction(str)).toBeFalsy();
      expect(validator.isFunction(num)).toBeFalsy();
      expect(validator.isFunction(arr)).toBeFalsy();
      expect(validator.isFunction(obj)).toBeFalsy();
      expect(validator.isFunction(func)).toBeTruthy();
      expect(validator.isFunction(bool)).toBeFalsy();
    });
  });

  describe('performs array validation of', () => {

    const arrayOfStrings = ['a', 'b', 'c'];
    const arrayOfNumbers = [1, 2, 3];
    const arrayOfObjects = [{}, {}, {}];
    const arrayOfBooleans = [true, false, true];

    it('strings', () => {
      expect(validator.isArrayOfStrings(arrayOfStrings)).toBeTruthy();
      expect(validator.isArrayOfStrings(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfBooleans)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isArrayOfNumbers(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfNumbers)).toBeTruthy();
      expect(validator.isArrayOfNumbers(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfBooleans)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isArrayOfObjects(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfObjects)).toBeTruthy();
      expect(validator.isArrayOfObjects(arrayOfBooleans)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isArrayOfBooleans(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfBooleans)).toBeTruthy();
    });
  });

  describe('get validator for', () => {

    it('strings', () => {
      expect(validator.getValidator('string')).toBe(validator.isString);
    });

    it('numbers', () => {
      expect(validator.getValidator('number')).toBe(validator.isNumber);
    });

    it('arrays', () => {
      expect(validator.getValidator('array')).toBe(validator.isArray);
    });

    it('objects', () => {
      expect(validator.getValidator('object')).toBe(validator.isObject);
    });

    it('booleans', () => {
      expect(validator.getValidator('boolean')).toBe(validator.isBoolean);
    });

    it('functions', () => {
      expect(validator.getValidator('function')).toBe(validator.isFunction);
    });

    it('array of strings', () => {
      expect(validator.getValidator('strings')).toBe(validator.isArrayOfStrings);
    });

    it('array of numbers', () => {
      expect(validator.getValidator('numbers')).toBe(validator.isArrayOfNumbers);
    });

    it('array of objects', () => {
      expect(validator.getValidator('objects')).toBe(validator.isArrayOfObjects);
    });

    it('array of booleans', () => {
      expect(validator.getValidator('booleans')).toBe(validator.isArrayOfBooleans);
    });

  });
});

describe('cast into string', () => {
  const str = 'hello';
  const strNumber = '42';
  const number = 42;
  const boolTrue = true;
  const boolFalse = false;
  const date = new Date();
  const obj = {};
  const array = [];
  const numberOne = 1;
  const numberZero = 0;
  const stringTrue = 'true';
  const stringFalse = 'false';

  it('strings', () => {
    expect(validator.castString(str)).toBe('hello');
    expect(validator.castString(number)).toBe('42');
    expect(validator.castString(boolTrue)).toBe('true');
    expect(validator.castString(date)).toBe(String(new Date()));
    expect(() => {
      validator.castString(obj);
    }).toThrow(error.CannotCoerceError);
    expect(() => {
      validator.castString(array);
    }).toThrow(error.CannotCoerceError);
  });

  it('numbers', () => {
    expect(validator.castNumber(number)).toBe(42);
    expect(validator.castNumber(strNumber)).toBe(42);
    expect(() => {
      validator.castNumber(obj);
    }).toThrow(error.CannotCoerceError);
    expect(() => {
      validator.castNumber(array);
    }).toThrow(error.CannotCoerceError);
    expect(() => {
      validator.castNumber(str);
    }).toThrow(error.CannotCoerceError);
    expect(() => {
      validator.castNumber(boolTrue);
    }).toThrow(error.CannotCoerceError);
    
  });

  it('booleans', () => {
    expect(validator.castBoolean(boolTrue)).toBe(true);
    expect(validator.castBoolean(boolFalse)).toBe(false);
    expect(validator.castBoolean(numberOne)).toBe(true);
    expect(validator.castBoolean(numberZero)).toBe(false);
    expect(validator.castBoolean(stringTrue)).toBe(true);
    expect(validator.castBoolean(stringFalse)).toBe(false);
    expect(() => {
      validator.castBoolean(obj);
    }).toThrow(error.CannotCoerceError);
    expect(() => {
      validator.castBoolean(str);
    }).toThrow(error.CannotCoerceError);
    expect(() => {
      validator.castBoolean(array);
    }).toThrow(error.CannotCoerceError);
    expect(() => {
      validator.castBoolean(date);
    }).toThrow(error.CannotCoerceError);
  });

  it('date', () => {
    // expect(validator.castDate(date)).toBe(String(new Date()));
    expect(() => {
      validator.castDate(obj);
    }).toThrow(error.CannotCoerceError);
    expect(() => {
      validator.castDate(str);
    }).toThrow(error.CannotCoerceError);
    expect(() => {
      validator.castDate(number);
    }).toThrow(error.CannotCoerceError);
    expect(() => {
      validator.castDate(boolFalse);
    }).toThrow(error.CannotCoerceError);
    expect(() => {
      validator.castDate(boolTrue);
    }).toThrow(error.CannotCoerceError);

  });

});

describe('get caster for', () => {

  it('number', () => {
    expect(validator.getCaster('number')).toBe(validator.castNumber);
  });
  it('boolean', () => {
    expect(validator.getCaster('boolean')).toBe(validator.castBoolean);
  });
  it('date', () => {
    expect(validator.getCaster('date')).toBe(validator.castDate);
  });
  it('string', () => {
    expect(validator.getCaster('string')).toBe(validator.castString);
  });
});