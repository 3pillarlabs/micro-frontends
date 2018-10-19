import 'dotenv/config';
import path from 'path';
import express from 'express';

import StaticRouter from './StaticRouter';

const server = express();

server.use(express.static(path.join('dist')));

server
  .set('view engine', 'ejs')
  .set('views', path.join('dist'));

server.get('*', StaticRouter);

server.listen(process.env.PORT, () => {
  console.log(`Skeleton app is listening on port: ${process.env.NODE_ENV}`);
});
