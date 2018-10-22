import React from 'react';

import './Fleet.css';

import { getPayload, isFleetUpdated } from '../../core/FleetUpdatedEvent';
import Spaceship from '../Spaceship/Spaceship';
import UsedBudget from '../UsedBudget/UsedBudget';
import MaxBudget from '../MaxBudget/MaxBudget';
import Might from '../Might/Might';
import FleetStatus from '../FleetStatus';
import Cta from '../Cta/Cta';

export default class Fleet extends React.Component {
  constructor() {
    super();
    this.state = {
      might: 0
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
    const { might, fleet } = this.state;
    return (
      <div className="pt-2">
        {
          fleet
            ? (
              <FleetStatus>
                <Might might={might} className="fleet-status__item" />
                <UsedBudget usedBudget={fleet.usedBudget} className="fleet-status__item" />
                <MaxBudget maxBudget={fleet.maxBudget} className="fleet-status__item" />
              </FleetStatus>
            )
            : (<Cta />)
        }
        <div className="fleet__card-columns card-columns">
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
