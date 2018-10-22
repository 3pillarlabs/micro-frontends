import React from 'react';
import PropTypes from 'prop-types';

const Spaceship = (props) => {
  const {
    name, price, url, buyButtonClick
  } = props;
  return (
    <div className="card">
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
          {price}
          $
        </li>
      </ul>
      <div className="card-body">
        <button
          type="button"
          className="btn btn-primary"
          onClick={buyButtonClick}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

Spaceship.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  buyButtonClick: PropTypes.func.isRequired
};

export default Spaceship;
