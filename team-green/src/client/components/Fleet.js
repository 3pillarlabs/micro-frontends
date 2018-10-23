/* eslint-disable no-unused-vars,class-methods-use-this */
import React from 'react';

export default class Fleet extends React.Component {
  componentDidMount() {
    window.addEventListener('message', this.onMessage.bind(this));
  }

  onMessage(event) {
    console.log(event);
    /**
     * Tip
     * We are expecting a FLEET_UPDATED event, and we are going to ignore the rest.
     * Our task is to display this information as nice as we can.
     */
    const expectedEvent = {
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

    /**
     * Bonus
     * We can calculate some kind of "might" value.
     * Each ship can have a might factor and, depending on which ships the user has baught,
     * we could calculate and display the might factor.
     */
  }

  render() {
    return (
      <div>This will be our fleet!</div>
    );
  }
}
