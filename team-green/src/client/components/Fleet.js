import React from 'react';

import { getPayload, isFleetUpdated } from '../core/FleetUpdatedEvent';
import Spaceship from './Spaceship';

export default class Fleet extends React.Component {
  constructor() {
    super();
    this.state = {
      fleet: []
    };
  }

  componentDidMount() {
    window.addEventListener('message', this.onMessage.bind(this));
  }

  onMessage(event) {
    if (isFleetUpdated(event)) {
      this.setState({
        fleet: getPayload(event)
      });
    }
  }

  render() {
    const { fleet } = this.state;
    return (
      <div>
        <h1>Your Fleet</h1>
        <div className="card-columns">
          {
            fleet.map(spaceship => (
              <Spaceship
                {...spaceship}
                key={spaceship.id}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
