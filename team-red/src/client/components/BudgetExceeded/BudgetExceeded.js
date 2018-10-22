import React from 'react';
import PropTypes from 'prop-types';

import './BudgetExceeded.css';
import budgetExceeded from './jigsaw.png';
import moreBudget from './game.png';

const BudgetExceeded = ({ getMoreBudget }) => (
  <div className="budget-exceeded">
    <img
      className="budget-exceeded__kind-man"
      src={budgetExceeded}
      alt="Budget exceeded"
    />
    <img
      className="budget-exceeded__nice-game"
      role="presentation"
      src={moreBudget}
      alt="Get more budget"
      onClick={getMoreBudget}
    />
  </div>
);

BudgetExceeded.propTypes = {
  getMoreBudget: PropTypes.func.isRequired
};


export default BudgetExceeded;
