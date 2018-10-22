import React from 'react';
import PropTypes from 'prop-types';

import './MaxBudget.css';

const MaxBudget = ({ maxBudget }) => (
  <div className="max-budget bg-danger">
    Max budget:&nbsp;
    {maxBudget}
    $
  </div>
);

MaxBudget.propTypes = {
  maxBudget: PropTypes.number.isRequired
};

export default MaxBudget;
