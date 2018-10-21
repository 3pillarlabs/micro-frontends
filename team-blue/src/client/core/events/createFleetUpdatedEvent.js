const FLEET_UPDATED = 'FLEET_UPDATED';
const TEAM_BLUE_TUNNEL = 'TEAM_BLUE_TUNNEL';

const createFleetUpdatedEvent = fleet => ({
  name: FLEET_UPDATED,
  payload: fleet,
  via: TEAM_BLUE_TUNNEL
});

export default createFleetUpdatedEvent;
