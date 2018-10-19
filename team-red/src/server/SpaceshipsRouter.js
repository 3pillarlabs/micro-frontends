import { Router } from 'express';

import getSpaceships from './getSpaceships';

const SpaceshipsRouter = Router();

SpaceshipsRouter.get('*', (req, res) => res
  .send(getSpaceships()));

export default SpaceshipsRouter;
