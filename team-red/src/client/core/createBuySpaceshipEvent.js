const BUY_SPACESHIP = 'BUY_SPACESHIP';
const TEAM_RED_TUNNEL = 'TEAM_RED_TUNNEL';

const createBuySpaceshipEvent = payload => ({
  name: BUY_SPACESHIP,
  payload,
  via: TEAM_RED_TUNNEL
});

export default createBuySpaceshipEvent;
