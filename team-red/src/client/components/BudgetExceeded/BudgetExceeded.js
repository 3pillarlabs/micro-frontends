import React from 'react';

import './BudgetExceeded.css';
import budgetExceeded from './jigsaw.png';
import moreBudget from './game.png';
import PropTypes from 'prop-types';

const BudgetExceeded = ({ getMoreBudget }) => {
  return (
    <div className="budget-exceeded">
      <img
        className="budget-exceeded__kind-man"
        src={budgetExceeded}
        alt="Budget exceeded"
      />
      <img
        className="budget-exceeded__nice-game"
        src={moreBudget}
        alt="Get more budget"
        onClick={getMoreBudget}
      />
    </div>
  )
};

BudgetExceeded.propTypes = {
  getMoreBudget: PropTypes.func
};


export default BudgetExceeded;
