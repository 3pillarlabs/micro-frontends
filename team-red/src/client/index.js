import React from 'react';
import { hydrate } from 'react-dom';

import Spaceships from './components/Spaceships';

const app = document.getElementById('team-red-app');

hydrate(<Spaceships spaceships={window.spaceships || []} />, app);
