import 'dotenv/config';
import path from 'path';
import express from 'express';

import StaticRouter from './StaticRouter';
import SpaceshipsRouter from './SpaceshipsRouter';

const server = express();

server
  .use('/assets', express.static(path.join('src', 'server', 'assets')))
  .use(express.static(path.join('dist')));

server
  .set('view engine', 'ejs')
  .set('views', path.join('dist'));

server
  .get('/api/v1/spaceships', SpaceshipsRouter)
  .get('/*', StaticRouter);

server.listen(process.env.PORT, () => {
  console.log(`Skeleton app is listening on port: ${process.env.PORT}`);
});
