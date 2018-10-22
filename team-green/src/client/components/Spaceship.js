import React from 'react';
import PropTypes from 'prop-types';

const Spaceship = ({ name, price, url }) => (
  <div className="card mb-3">
    <img
      className="card-img-top"
      src={url}
      alt={name}
    />
  </div>
);

Spaceship.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

export default Spaceship;
