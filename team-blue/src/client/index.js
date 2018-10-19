import React from 'react';
import { hydrate } from 'react-dom';

import Checkout from './components/Checkout/Checkout';

const app = document.getElementById('team-blue-app');

hydrate(<Checkout />, app);
