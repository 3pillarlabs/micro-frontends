import React from 'react';

import Spaceship from './Spaceship';
import createBuySpaceshipEvent from '../core/createBuySpaceshipEvent';

export default class Spaceships extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spaceships: props.spaceships || []
    };
  }

  static onBuyBuottonClick(spaceshipType) {
    window.postMessage(
      createBuySpaceshipEvent(spaceshipType),
      process.env.SKELETON_URL
    );
  }

  render() {
    const { spaceships } = this.state;
    return (
      <div>
        <h1>Fleet Configurator</h1>
        <div className="card-columns">
          {spaceships.map(spaceship => (
            <Spaceship
              {...spaceship}
              buyButtonClick={() => Spaceships.onBuyBuottonClick(spaceship)}
              key={spaceship.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
