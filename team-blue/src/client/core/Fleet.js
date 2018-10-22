import incrementSpaceshipQuantity from './incrementSpaceshipQuantity';

let fleet = {
  maxBudget: 20000,
  usedBudget: 0,
  spaceships: []
};

const getFleet = () => fleet;

const getMaxBudget = () => fleet.maxBudget;

const getUsedBudget = () => fleet.usedBudget;

const getSpaceships = () => fleet.spaceships;

const findIndexOfSpaceship = spaceship => getSpaceships().findIndex(s => s.id === spaceship.id);

const willExceedMaxBudget = newSpaceshipPrice => (
  getUsedBudget() + newSpaceshipPrice > getMaxBudget()
);

const addExistingSpaceship = (indexOfSpaceship) => {
  fleet = {
    ...fleet,
    spaceships: [
      ...fleet.spaceships.slice(0, indexOfSpaceship),
      {
        ...incrementSpaceshipQuantity(fleet.spaceships[indexOfSpaceship])
      },
      ...fleet.spaceships.slice(indexOfSpaceship + 1)
    ]
  };
};

const addNewSpaceship = (spaceship) => {
  fleet = {
    ...fleet,
    spaceships: [...fleet.spaceships, spaceship]
  };
};

const addToBudget = (newSpaceshipPrice) => {
  fleet = {
    ...fleet,
    usedBudget: fleet.usedBudget + newSpaceshipPrice
  };
};

const addSpaceship = (spaceship) => {
  if (willExceedMaxBudget(spaceship.price)) {
    throw Error('BUDGET_EXCEEDED');
  }

  const indexOfSpaceship = findIndexOfSpaceship(spaceship);

  if (indexOfSpaceship > -1) {
    addExistingSpaceship(indexOfSpaceship);
  } else {
    addNewSpaceship(spaceship);
  }

  addToBudget(spaceship.price);
};

export {
  getFleet,
  addSpaceship
};
