import React from 'react';

import PropTypes from 'prop-types';

/* eslint-disable react/no-array-index-key */

const FleetStatus = ({ children }) => (
  children.map((child, index) => (<div className="d-flex mb-2" key={index}>{child}</div>))
);

FleetStatus.propTypes = {
  children: PropTypes.node.isRequired
};

export default FleetStatus;
