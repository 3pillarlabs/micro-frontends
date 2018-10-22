import 'dotenv/config';
import 'ignore-styles';
import express from 'express';
import path from 'path';

import getSpaceships from './getSpaceships';
import getRenderedApp from './getRenderedApp';

const server = express();

server.use(express.static(path.join('dist')));

server
  .set('view engine', 'ejs')
  .set('views', path.join('dist'));

server.get('*', (req, res) => {
  getSpaceships
    .then((spaceships) => {
      res.render('index', {
        spaceships: JSON.stringify(spaceships),
        teamRed: getRenderedApp(spaceships)
      });
    });
});

server.listen(process.env.PORT, () => {
  console.log(`TeamRed app is listening on port: ${process.env.PORT}`);
});
