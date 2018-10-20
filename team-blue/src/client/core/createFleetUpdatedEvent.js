const FLEET_UPDATED = 'FLEET_UPDATED';
const TEAM_BLUE_TUNNEL = 'TEAM_BLUE_TUNNEL';

const createFleetUpdatedEvent = payload => ({
  name: FLEET_UPDATED,
  payload,
  via: TEAM_BLUE_TUNNEL
});

export default createFleetUpdatedEvent;
