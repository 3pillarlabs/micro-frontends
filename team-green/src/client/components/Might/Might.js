import React from 'react';
import PropTypes from 'prop-types';

import './Might.css';

const Might = ({ might }) => (
  <div className="max-budget bg-success">
    Might:&nbsp;
    {might}
    &nbsp;points
  </div>
);

Might.propTypes = {
  might: PropTypes.number.isRequired
};

export default Might;
