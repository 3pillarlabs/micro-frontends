import React from 'react';

import { getPayload, isFleetUpdated } from '../core/FleetUpdatedEvent';
import Spaceship from './Spaceship';

export default class Fleet extends React.Component {
  constructor() {
    super();
    this.state = {};
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
        {
          fleet && (
            <h2>
              Used budget:&nbsp;
              {fleet.usedBudget}
            </h2>
          )
        }
        <div className="card-columns">
          {
            fleet && fleet.spaceships.map(spaceship => (
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
