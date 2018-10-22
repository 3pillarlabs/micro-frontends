import React from 'react';

import { getPayload, isFleetUpdated } from '../core/FleetUpdatedEvent';
import Spaceship from './Spaceship';
import UsedBudget from './UsedBudget/UsedBudget';
import MaxBudget from './MaxBudget/MaxBudget';
import Might from './Might/Might';
import FleetStatus from './FleetStatus';

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
      <div className="pt-2">
        {
          fleet && (
            <FleetStatus>
              <Might might={fleet.usedBudget} className="fleet-status__item" />
              <UsedBudget usedBudget={fleet.usedBudget} className="fleet-status__item" />
              <MaxBudget maxBudget={fleet.maxBudget} className="fleet-status__item" />
            </FleetStatus>
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
