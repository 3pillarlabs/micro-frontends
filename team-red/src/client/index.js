import React from 'react';
import { hydrate } from 'react-dom';

import Spaceships from './components/Spaceships';

const app = document.getElementById('team-red-app');

/**
 * Tip
 * If you would fetch the spaceships server side,
 * and have them available inside a global object on the client,
 * you could pass them to the Spaceships component as a prop.
 */

hydrate(<Spaceships />, app);


window.postMessage(
  {
    name: 'BUY_SPACESHIP',
    payload: {
      id: 'sonJet',
      name: 'Son Jet',
      price: 1000,
      url: 'assets/sonJet.jpg',
      quantity: 1
    },
    via: 'TEAM_RED_TUNNEL'
  },
  process.env.SKELETON_URL
);


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
