import React from 'react';
import { renderToString } from 'react-dom/server';

import Spaceships from '../client/components/Spaceships';

const getRenderedApp = spaceships => renderToString(<Spaceships spaceships={spaceships} />);

export default getRenderedApp;
