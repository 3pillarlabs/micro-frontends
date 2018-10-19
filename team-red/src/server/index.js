import 'dotenv/config';
import 'ignore-styles';
import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import SpaceshipsRouter from './SpaceshipsRouter';
import getRenderedSpaceships from './getRenderedSpaceships';
import getSpaceships from './getSpaceships';

const server = express();

server
  .use(cors())
  .use(bodyParser.json())
  .use(express.static(path.join('dist')))
  .use('/assets', express.static(path.join('src', 'server', 'assets')));

server
  .set('view engine', 'ejs')
  .set('views', path.join('dist'));

server
  .get('/api/v1/spaceships', SpaceshipsRouter)
  .get('/*', (req, res) => {
    res.render('index', {
      teamRed: getRenderedSpaceships(),
      spaceships: JSON.stringify(getSpaceships())
    });
  });

server.listen(process.env.PORT, () => {
  console.log(`TeamRed app is listening on port: ${process.env.NODE_ENV}`);
});
