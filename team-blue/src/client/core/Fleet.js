let fleet = [];

const addToFleet = (spceship) => {
  fleet = [spceship, ...fleet];
};

const getFleet = () => fleet;

export {
  addToFleet,
  getFleet
};
