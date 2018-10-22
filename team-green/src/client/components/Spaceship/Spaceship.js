import React from 'react';
import PropTypes from 'prop-types';

import './Spaceship.css';

const Spaceship = ({ name, url, quantity }) => (
  <div className="card mb-3">
    <div className="spaceship__quantity bg-primary">{quantity}</div>
    <img
      className="card-img-top"
      src={url}
      alt={name}
    />
  </div>
);

Spaceship.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Spaceship;
