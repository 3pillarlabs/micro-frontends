import React from 'react';
import { hydrate } from 'react-dom';

import Spaceships from './components/Spaceships';

const app = document.getElementById('team-red-app');

/**
 * Tip
 * If you would fetch the spaceships server side,
 * and have them available inside a global object on the client,
 * you could pass them to the Spaceships component as a prop.
 */

hydrate(<Spaceships />, app);
