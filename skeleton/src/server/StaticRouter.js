import { Router } from 'express';

import getContents from './getContents';

const StaticRouter = Router();

StaticRouter.get('*', (req, res) => Promise
  .all([
    getContents(process.env.TEAM_BLUE_URL),
    getContents(process.env.TEAM_GREEN_URL),
    getContents(process.env.TEAM_RED_URL)
  ])
  .then((responses) => {
    res.render('index', {
      teamBlue: responses[0],
      teamGreen: responses[1],
      teamRed: responses[2]
    });
  }).catch(error => res.send(error.message)));

export default StaticRouter;
