/* eslint-disable no-unused-vars */

const onMessage = (event) => {
  console.log('Uhhh, an event', event);

  /**
   * Tip
   * We are interesting in BUY_SPACESHIP events,
   * which we need to validate.
   */
  const expectedEventData = {
    name: 'BUY_SPACESHIP',
    payload: {
      id: 'sonJet',
      name: 'Son Jet',
      price: 1000,
      quantity: 1,
      url: '/assets/sonJet.jpg'
    },
    via: 'TEAM_RED_TUNNEL'
  };

  /**
   * Tip
   * For security purposes it's very important to check the origin
   */
  console.log('And the origin has to be known', process.env.SKELETON_URL);

  /**
   * Tip
   * We need to keep our fleet in memory,
   * and add spaceships each time we find a BUY_SPACESHIP event.
   */
  const fleet = {
    maxBudget: 20000,
    usedBudget: 0,
    spaceships: []
  };

  /**
   * Tip
   * We need to issue a FLEET_UPDATED event each time we have updated our fleet.
   */
  const fleetUpdateEvent = {
    name: 'FLEET_UPDATED',
    payload: {
      maxBudget: 20000,
      usedBudget: 1000,
      spaceships: [{
        id: 'sonJet',
        name: 'Son Jet',
        price: 1000,
        url: 'http://localhost:3000/assets/sonJet.jpg',
        quantity: 1
      }]
    },
    via: 'TEAM_BLUE_TUNNEL'
  };

  // window.postMessage(
  //   fleetUpdateEvent,
  //   process.env.SKELETON_URL
  // );

  /**
   * Tip
   * If the budget exceeded 20000 we need to issue a BUDGET_EXCEEDED event
   */
  const budgetExceeded = {
    name: 'BUDGET_EXCEEDED',
    via: 'TEAM_BLUE_TUNNEL'
  };

  // window.postMessage(
  //   budgetExceeded,
  //   process.env.SKELETON_URL
  // );
};

window.addEventListener('message', onMessage.bind(this));
