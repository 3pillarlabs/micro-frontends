import React from 'react';
import PropTypes from 'prop-types';

import './UsedBudget.css';

const UsedBudget = ({ usedBudget }) => (
  <div className="used-budget bg-primary">
    Used budget:&nbsp;
    {usedBudget}
    $
  </div>
);

UsedBudget.propTypes = {
  usedBudget: PropTypes.number.isRequired
};

export default UsedBudget;
