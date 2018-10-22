import React from 'react';
import { hydrate } from 'react-dom';

import Fleet from './components/Fleet/Fleet';

const app = document.getElementById('team-green-app');

hydrate(<Fleet />, app);
