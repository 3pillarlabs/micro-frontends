import 'dotenv/config';
import 'ignore-styles';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

import RelatedProducts from './client/components/RelatedProducts/RelatedProducts';

const app = express()
  .use(express.static(path.join('dist')))
  .set('view engine', 'ejs')
  .set('views', path.resolve('dist'));

app.get('/*', (req, res) => {
  res.render('index', {
    teamGreen: renderToString(<RelatedProducts />)
  });
});

app.listen(process.env.PORT, () => {
  console.log(`TeamGreen app is listening on port: ${process.env.NODE_ENV}`);
});
