const buySpaceshipEvent = payload => ({
  name: 'BUY_SPACESHIP',
  payload,
  via: 'TEAM_RED_TUNNEL'
});

export default buySpaceshipEvent;
