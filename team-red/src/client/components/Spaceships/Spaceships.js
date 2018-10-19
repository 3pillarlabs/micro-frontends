import React from 'react';

import Spaceship from '../Spaceship/Spaceship';
import buySpaceshipEvent from '../../events/buySpaceshipEvent';

export default class Spaceships extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spaceships: props.spaceships || []
    };
  }

  static onBuyBuottonClick(spaceshipType) {
    window.postMessage(
      buySpaceshipEvent(spaceshipType),
      'http://localhost:3000'
    );
  }

  render() {
    const { spaceships } = this.state;
    return (
      <div className="card-columns">
        {spaceships.map(spaceship => (
          <Spaceship
            {...spaceship}
            buyButtonClick={Spaceships.onBuyBuottonClick}
            key={spaceship.id}
          />
        ))}
      </div>
    );
  }
}
