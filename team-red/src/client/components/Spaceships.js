import React from 'react';

import Spaceship from './Spaceship';
import createBuySpaceshipEvent from '../core/createBuySpaceshipEvent';
import isBudgetExceeded from '../core/isBudgetExceededEvent';
import addQuantityToSpaceship from '../core/addQuantityToSpaceship';
import BudgetExceeded from './BudgetExceeded/BudgetExceeded';

export default class Spaceships extends React.Component {
  static onBuyBuottonClick(spaceship) {
    window.postMessage(
      createBuySpaceshipEvent(
        addQuantityToSpaceship(spaceship)
      ),
      process.env.SKELETON_URL
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      spaceships: props.spaceships || [],
      budgetExceeded: false
    };
  }

  componentDidMount() {
    window.addEventListener('message', this.onMessage.bind(this));
  }

  onMessage(event) {
    if (isBudgetExceeded(event)) {
      this.setState({
        budgetExceeded: true
      });
    }
  }

  onGetMoreBudget() {
    this.setState({
      budgetExceeded: false
    });
  }

  render() {
    const { spaceships, budgetExceeded } = this.state;
    return (
      <div className="pt-2">
        {
          budgetExceeded && (
            <BudgetExceeded getMoreBudget={() => this.onGetMoreBudget()} />
          )
        }
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
