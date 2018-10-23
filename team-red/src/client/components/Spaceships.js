import React from 'react';

export default class Spaceships extends React.Component {
  static obBuyButtonClick() {
    /**
     * Tip
     * When the user buys a spaceship, Team Blue, the game's mastermind
     * expects a message like bellow.
     */
    window.postMessage(
      {
        name: 'BUY_SPACESHIP',
        payload: {
          id: 'sonJet',
          name: 'Son Jet',
          price: 1000,
          url: 'http://localhost:3000/assets/sonJet.jpg',
          quantity: 1
        },
        via: 'TEAM_RED_TUNNEL'
      },
      process.env.SKELETON_URL
    );
  }

  componentDidMount() {
    /**
     * Tip
     * This is the URL where you will find the spaceships.
     * The spaceships do not come with a quantity field.
     * Bonus points if you get the spaceships server side.
     */
    fetch('http://localhost:3000/api/v1/spaceships');

    /**
     * Tip
     * You need to listen for the BUDGET_EXCEEDED event.
     * There is a security issue here, you should always check the origin
     * of the event.
     * If the budget has exceeded, you need to infor the user.
     */
    window.addEventListener('message', (event) => {
      if (
        event
        && event.origin === process.env.SKELETON_URL
        && event.data
        && event.data.via === 'TEAM_BLUE_TUNNEL'
        && event.data.name === 'BUDGET_EXCEEDED'
      ) {
        alert('BUDGET_EXCEEDED');
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Spaceship Catalog!</h1>
        <button
          type="button"
          onClick={Spaceships.obBuyButtonClick}
        >
          Buy
        </button>
      </div>
    );
  }
}
