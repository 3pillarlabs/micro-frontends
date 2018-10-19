import React from 'react';
import { renderToString } from 'react-dom/server';

import Spaceships from '../client/components/Spaceships/Spaceships';
import getSpaceships from './getSpaceships';

const getRenderedSpaceships = () => renderToString(<Spaceships spaceships={getSpaceships()} />);

export default getRenderedSpaceships;
