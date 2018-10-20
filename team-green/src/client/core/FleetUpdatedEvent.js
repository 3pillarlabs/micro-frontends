const TEAM_BLUE_TUNNEL = 'TEAM_BLUE_TUNNEL';
const FLEET_UPDATED = 'FLEET_UPDATED';

const isValid = event => event
  && event.origin === process.env.SKELETON_URL
  && event.data
  && event.data.payload;

const isViaTeamBlue = event => isValid(event) && event.data.via === TEAM_BLUE_TUNNEL;

const isFleetUpdated = event => isViaTeamBlue(event) && event.data.name === FLEET_UPDATED;

const getPayload = event => (isValid(event) ? event.data.payload : undefined);

export {
  isFleetUpdated,
  getPayload
};
