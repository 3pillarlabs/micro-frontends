import React from 'react';

import './Checkout.css';
import EventManager from '../../events/EventManager';

export default class Checkout extends React.Component {
  constructor() {
    super();

    if (typeof window !== 'undefined') {
      window.addEventListener('message', Checkout.onMessage.bind(this));
    }
  }

  static onMessage(event) {
    if (EventManager.isBuySpaceship(event)) {
      console.log('The event', EventManager.getPayload(event));
    }
  }

  render() {
    return (
      <div>
        Checkout!
      </div>
    );
  }
}
