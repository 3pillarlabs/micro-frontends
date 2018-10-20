const isNil = input => input === null || input === undefined;

const isString = input => typeof input === 'string';

const isNumber = input => typeof input === 'number' && !Number.isNaN(input);

const isObject = input => !isNil(input) && typeof input === 'object';

export {
  isNil,
  isString,
  isNumber,
  isObject
};
