import { isNumber, isObject, isString } from './Validator';

const isValidSpaceship = spaceship => (
  isObject(spaceship)
  && isString(spaceship.id)
  && isString(spaceship.name)
  && isNumber(spaceship.price)
  && isString(spaceship.url)
  && isNumber(spaceship.quantity)
);

export default isValidSpaceship;
