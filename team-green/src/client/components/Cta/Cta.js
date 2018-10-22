import React from 'react';

import ctaImg from './cta.png';
import './Cta.css';

const Cta = () => (
  <div>
    <img
      className="cta__img d-block"
      src={ctaImg}
      alt="Buy your fleet"
    />
    <p className="cta__text">Buy your fleet!</p>
  </div>
);

export default Cta;
