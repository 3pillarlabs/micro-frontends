import React from 'react';
import PropTypes from 'prop-types';

const Spaceship = ({ name, price, url }) => (
  <div className="card mb-3">
    <img
      className="card-img-top"
      src={url}
      alt={name}
    />
    <div className="card-body">
      <h5 className="card-title mb-0">{name}</h5>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        Price:&nbsp;
        {price}
        $
      </li>
    </ul>
  </div>
);

Spaceship.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

export default Spaceship;
