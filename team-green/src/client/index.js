import React from 'react';
import { hydrate } from 'react-dom';

import RelatedProducts from './components/RelatedProducts/RelatedProducts';

const app = document.getElementById('team-green-app');

hydrate(<RelatedProducts />, app);
