import 'dotenv/config';
import 'ignore-styles';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Checkout from './client/components/Checkout/Checkout';

const server = express();

server.use(express.static(path.join('dist')));

server
  .set('view engine', 'ejs')
  .set('views', path.join('dist'));

server.get('/*', (req, res) => {
  res.render('index', {
    teamBlue: renderToString(<Checkout />)
  });
});

server.listen(process.env.PORT, () => {
  console.log(`TeamBlue app is listening on port: ${process.env.NODE_ENV}`);
});
