import 'dotenv/config';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Spaceships from '../client/components/Spaceships';

const server = express();

server.use(express.static(path.join('dist', 'client')));

server
  .set('view engine', 'ejs')
  .set('views', path.join('dist', 'client'));

server.get('*', (req, res) => {
  /**
   * TIP
   * If you would fetch the spaceships server side,
   * you could add them to the spaceships array and the server would assign them
   * as a global variable to the client app.
   * You have node-fetch installed for such an action.
   */
  res.render('index', {
    spaceships: JSON.stringify([]),
    teamRed: renderToString(<Spaceships />)
  });
});

server.listen(process.env.PORT, () => {
  console.log(`TeamRed app is listening on port: ${process.env.PORT}`);
});
