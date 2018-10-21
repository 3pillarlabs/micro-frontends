const TEAM_BLUE_TUNNEL = 'TEAM_BLUE_TUNNEL';
const BUDGET_EXCEEDED = 'BUDGET_EXCEEDED';

const isValid = event => event && event.origin === process.env.SKELETON_URL;

const isViaTeamBlue = event => isValid(event) && event.data.via === TEAM_BLUE_TUNNEL;

const isBudgetExceeded = event => isViaTeamBlue(event) && event.data.name === BUDGET_EXCEEDED;

export default isBudgetExceeded;
