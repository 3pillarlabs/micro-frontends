const TEAM_RED_TUNNEL = 'TEAM_RED_TUNNEL';
const BUY_SPACESHIP = 'BUY_SPACESHIP';

const isValid = event => event
  && event.origin === process.env.SKELETON_URL
  && event.data
  && event.data.payload;

const isViaTeamRed = event => isValid(event) && event.data.via === TEAM_RED_TUNNEL;

const isBuySpaceship = event => isViaTeamRed(event) && event.data.name === BUY_SPACESHIP;

const getPayload = event => (isValid(event) ? event.data.payload : undefined);

export {
  isBuySpaceship,
  getPayload
};
