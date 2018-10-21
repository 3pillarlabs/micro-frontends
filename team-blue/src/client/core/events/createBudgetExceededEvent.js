const BUDGET_EXCEEDED = 'BUDGET_EXCEEDED';
const TEAM_BLUE_TUNNEL = 'TEAM_BLUE_TUNNEL';

const createBudgetExceededEvent = () => ({
  name: BUDGET_EXCEEDED,
  via: TEAM_BLUE_TUNNEL
});

export default createBudgetExceededEvent;
