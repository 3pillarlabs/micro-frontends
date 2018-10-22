import 'dotenv/config';
import express from 'express';
import path from 'path';

const server = express();

server.use(express.static(path.join('dist')));

server
  .set('view engine', 'ejs')
  .set('views', path.join('dist'));

server.get('/*', (req, res) => {
  res.render('index');
});

server.listen(process.env.PORT, () => {
  console.log(`TeamBlue app is listening on port: ${process.env.PORT}`);
});
