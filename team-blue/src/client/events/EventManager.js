const isValid = event => event
  && event.origin === process.env.SKELETON_URL
  && event.data
  && event.data.payload;

const isViaTeamRed = event => isValid(event) && event.data.via === 'TEAM_RED_TUNNEL';

const isBuySpaceship = event => isViaTeamRed(event) && event.data.name === 'BUY_SPACESHIP';

const getPayload = event => (isValid(event) ? event.data.payload : undefined);

const EventManager = {
  isValid,
  isViaTeamRed,
  isBuySpaceship,
  getPayload
};

export default EventManager;
